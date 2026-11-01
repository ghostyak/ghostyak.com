import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

// Rasterizes public/favicon.svg (the gold yak) into the formats Google Search
// accepts for its favicon: a 192x192 PNG and a favicon.ico holding 16/32/48 PNGs.
// Run `node scripts/build-favicons.mjs` after changing favicon.svg.
// sharp ships with Next.js, so it is resolved from the next package rather than
// added as a dependency of this site.
const require = createRequire(import.meta.url);
const sharp = require(require.resolve("sharp", { paths: [require.resolve("next/package.json")] }));

const svg = readFileSync(new URL("../public/favicon.svg", import.meta.url));
// The SVG is 512x512, so every target is a downscale of a full-resolution render.
const render = (size) => sharp(svg).resize(size, size).png().toBuffer();

const png192 = await render(192);
writeFileSync(new URL("../public/favicon-192.png", import.meta.url), png192);
// Legacy URL that search engines may still request for the old black icon; it now serves the same gold PNG.
writeFileSync(new URL("../public/ghostyak.png", import.meta.url), png192);

// ICO container with PNG-compressed entries (supported since Windows Vista and by every browser).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(render));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);
const directory = Buffer.alloc(16 * sizes.length);
let offset = header.length + directory.length;
images.forEach((image, index) => {
  const entry = directory.subarray(index * 16);
  entry.writeUInt8(sizes[index], 0); // width
  entry.writeUInt8(sizes[index], 1); // height
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(image.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += image.length;
});
writeFileSync(new URL("../public/favicon.ico", import.meta.url), Buffer.concat([header, directory, ...images]));
console.log(`favicon-192.png, ghostyak.png and favicon.ico (${sizes.join(", ")}) written from favicon.svg`);
