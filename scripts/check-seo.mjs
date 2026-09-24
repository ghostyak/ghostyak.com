import assert from "node:assert/strict";
import { request as httpRequest } from "node:http";

// Run against `npm run start -- --port 3100`, or pass a deployed origin as argv[2].
const base = new URL(process.argv[2] ?? "http://localhost:3100");
const origin = "https://www.ghostyak.com";
const languages = { ko: "ko", en: "en", ja: "ja-JP", zh: "zh-CN", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT" };
const decode = (value) => value.replaceAll("&amp;", "&");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key.toLowerCase(), decode(value)]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(([tag]) => attrs(tag));
async function request(path, headers = {}) {
  return fetch(new URL(path, base), { redirect: "manual", headers });
}

const sitemapResponse = await request("/sitemap.xml");
assert.equal(sitemapResponse.status, 200);
const xml = await sitemapResponse.text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, entry]) => ({
  url: entry.match(/<loc>(.*?)<\/loc>/)?.[1],
  alternates: tags(entry, "xhtml:link"),
}));
assert.ok(entries.length >= 54, "Sitemap must contain all nine locales' main pages");
const urls = new Set(entries.map(({ url }) => url));
assert.equal(urls.size, entries.length, "Duplicate sitemap URL");
const pages = new Map();

function expectedLanguages(path) {
  const content = path.replace(/^\/[^/]+/, "");
  return Object.fromEntries([
    ...Object.entries(languages).map(([locale, lang]) => [lang, `${origin}/${locale}${content}`]),
    ["x-default", `${origin}/en${content}`],
  ]);
}

function checkHtml(html, path, response) {
  const locale = path.split("/")[1];
  assert.equal(tags(html, "html")[0]?.lang, languages[locale], `${path}: html lang`);
  const links = tags(html, "link");
  const canonicals = links.filter(({ rel }) => rel === "canonical");
  assert.deepEqual(canonicals.map(({ href }) => href), [`${origin}${path}`], `${path}: canonical`);
  const alternates = Object.fromEntries(links.filter(({ rel, hreflang }) => rel === "alternate" && hreflang).map(({ hreflang, href }) => [hreflang, href]));
  assert.deepEqual(alternates, expectedLanguages(path), `${path}: reciprocal hreflang`);
  for (const href of Object.values(alternates)) assert.ok(urls.has(href), `${path}: alternate missing from sitemap: ${href}`);
  const meta = tags(html, "meta");
  assert.equal(meta.find(({ property }) => property === "og:url")?.content, `${origin}${path}`, `${path}: og:url`);
  assert.ok(!meta.some(({ name, content }) => /^(robots|googlebot)$/.test(name) && /noindex|none/i.test(content)), `${path}: noindex`);
  assert.ok(!/noindex|none/i.test(response.headers.get("x-robots-tag") ?? ""));
  for (const { href } of tags(html, "a")) {
    if (!href || /^(mailto:|tel:)/.test(href)) continue;
    const target = new URL(href, `${origin}${path}`);
    if (target.origin !== origin || /\.[^/]+$/.test(target.pathname)) continue;
    assert.ok(urls.has(`${origin}${target.pathname}`), `${path}: noncanonical internal link ${href}`);
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(json);
    assert.equal(data.url, `${origin}${path}`, `${path}: JSON-LD url`);
    if (data.mainEntityOfPage) assert.equal(data.mainEntityOfPage, data.url);
    if (data.offers) assert.equal(data.offers.url, data.url);
    assert.equal(data.publisher.url, `${origin}/${locale}`);
  }
}

// Small batches avoid overwhelming a local production server.
for (let offset = 0; offset < entries.length; offset += 4) {
  await Promise.all(entries.slice(offset, offset + 4).map(async ({ url, alternates }) => {
    const parsed = new URL(url);
    assert.equal(parsed.origin, origin);
    assert.ok(languages[parsed.pathname.split("/")[1]], `Unprefixed sitemap URL: ${url}`);
    assert.ok(!parsed.pathname.endsWith("/") && !parsed.search);
    assert.deepEqual(Object.fromEntries(alternates.map(({ hreflang, href }) => [hreflang, href])), expectedLanguages(parsed.pathname));
    const response = await request(parsed.pathname);
    assert.equal(response.status, 200, `${url}: sitemap must contain only 200 pages`);
    const html = await response.text();
    checkHtml(html, parsed.pathname, response);
    pages.set(parsed.pathname, html);
  }));
}

let redirects = 0;
async function checkRedirect(path, expected, headers = {}) {
  const response = await request(path, headers);
  assert.equal(response.status, 308, `${path}: permanent redirect`);
  const destination = new URL(response.headers.get("location"), base);
  assert.equal(destination.pathname + destination.search + destination.hash, expected, `${path}: redirect destination`);
  assert.ok(urls.has(`${origin}${destination.pathname}`), `${path}: destination is not canonical`);
  const final = await request(destination.pathname + destination.search, headers);
  assert.equal(final.status, 200, `${path}: redirect chain`);
  redirects++;
}

// Every old English content URL, plus slash and historical product aliases.
for (const path of pages.keys()) {
  if (path.startsWith("/en")) await checkRedirect(path.slice(3) || "/", path);
}
for (const locale of Object.keys(languages)) {
  await checkRedirect(`/${locale}/`, `/${locale}`);
  await checkRedirect(`/${locale}/product/boxes/`, `/${locale}/product/boxes`);
  await checkRedirect(`/${locale}/products/boxes/`, `/${locale}/product/boxes`);
  await checkRedirect(`/${locale}/product/boxes/download`, `/${locale}/product/boxes#download`);
}
for (const path of ["/products/boxes", "/products/boxes/old-path", "/product/boxes/"]) {
  await checkRedirect(path, "/en/product/boxes");
}
await checkRedirect("/product/boxes/download/?utm_source=test", "/en/product/boxes?utm_source=test#download");

const preferences = [
  { "accept-language": "ko-KR,ko;q=0.9", cookie: "ghostyak_locale=ja" },
  { "accept-language": "en-US,en;q=0.9", cookie: "ghostyak_locale=ko", "user-agent": "Googlebot" },
];
for (const headers of preferences) {
  await checkRedirect("/", "/en", headers);
  await checkRedirect("/product/boxes?utm_source=test", "/en/product/boxes?utm_source=test", headers);
  for (const locale of ["ko", "en"]) {
    for (const suffix of ["", "/product/boxes", "/product/csv-search-engine"]) {
      const path = `/${locale}${suffix}`;
      const response = await request(`${path}?utm_source=test`, headers);
      assert.equal(response.status, 200, `${path}: language preference changed response`);
      checkHtml(await response.text(), path, response);
    }
  }
}
for (const path of ["/xx/product/boxes", "/en/does-not-exist", "/ko/blog/does-not-exist", "/docs"]) {
  const response = await request(path);
  assert.equal(response.status, 404, `${path}: unknown page`);
  assert.ok(/noindex/.test(await response.text()), `${path}: 404 must be noindex`);
}
const robots = await (await request("/robots.txt")).text();
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.ok(robots.includes("Allow: /"));

// Simulate production hosts without making outbound requests or following redirects.
if (base.hostname === "localhost" || base.hostname === "127.0.0.1") {
  // Native fetch does not preserve an overridden Host header in all Node versions.
  const hostRequest = (path, headers) => new Promise((resolve, reject) => {
    const req = httpRequest(new URL(path, base), { headers }, (response) => {
      response.resume();
      resolve({ status: response.statusCode, location: response.headers.location });
    });
    req.on("error", reject);
    req.end();
  });
  for (const host of ["ghostyak.com", "www.ghostyak.com"]) {
    const response = await hostRequest("/product/boxes/?utm_source=test", { host, "x-forwarded-proto": "http" });
    assert.equal(response.status, 308);
    assert.equal(response.location, `${origin}/en/product/boxes?utm_source=test`);
  }
  const canonical = await hostRequest("/en/product/boxes", { host: "www.ghostyak.com", "x-forwarded-proto": "https" });
  assert.equal(canonical.status, 200, "Canonical public origin must not loop");
  const apex = await hostRequest("/ko/product/boxes", { host: "ghostyak.com", "x-forwarded-proto": "https" });
  assert.equal(apex.status, 308);
  assert.equal(apex.location, `${origin}/ko/product/boxes`);
}
console.log(`SEO checks passed: ${entries.length} canonical pages, ${redirects} one-hop redirects, all locale alternates, internal links, JSON-LD, tracking queries, language preferences, 404s and robots.txt.`);
