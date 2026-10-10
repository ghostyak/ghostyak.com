import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { sourceLocale } from "@/i18n/locales";

const legalRoot = path.join(process.cwd(), "content", "legal");

// A paragraph holding only this marker is where the page renders the
// bot-protected contact email instead of writing the address into the HTML.
const contactEmailMarker = "<p>[[contact-email]]</p>";

export const privacyPolicyPath = "/privacy";

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  htmlBeforeContact: string;
  htmlAfterContact: string;
};

// Legal documents are published in Korean only.
export async function getLegalDocument(slug: "privacy-policy"): Promise<LegalDocument> {
  const source = await fs.readFile(path.join(legalRoot, sourceLocale, `${slug}.md`), "utf8");
  const { data, content } = matter(source);
  if (typeof data.title !== "string" || typeof data.description !== "string" || typeof data.effectiveDate !== "string") {
    throw new Error(`${slug}.md must define title, description, and effectiveDate.`);
  }
  const html = String(await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(content));
  const [htmlBeforeContact, htmlAfterContact, ...rest] = html.split(contactEmailMarker);
  if (htmlAfterContact === undefined || rest.length > 0) {
    throw new Error(`${slug}.md must contain exactly one [[contact-email]] paragraph.`);
  }
  return { title: data.title, description: data.description, effectiveDate: data.effectiveDate, htmlBeforeContact, htmlAfterContact };
}
