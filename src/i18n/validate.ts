import "server-only";

import { getDictionary } from "@/i18n/get-dictionary";
import { publishedLocales, sourceLocale } from "@/i18n/locales";

function collectStrings(value: unknown, path = "dictionary", result = new Map<string, string>()) {
  if (typeof value === "string") {
    result.set(path, value);
    return result;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}.${index}`, result));
    return result;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => collectStrings(item, `${path}.${key}`, result));
  }
  return result;
}

function placeholders(value: string) {
  return [...value.matchAll(/\{([a-zA-Z0-9_]+)\}/g)].map((match) => match[1]).sort().join(",");
}

export async function validatePublishedDictionaries() {
  const sourceStrings = collectStrings(await getDictionary(sourceLocale));

  for (const locale of publishedLocales) {
    const strings = collectStrings(await getDictionary(locale));
    for (const [path, sourceValue] of sourceStrings) {
      const translatedValue = strings.get(path);
      if (!translatedValue?.trim()) throw new Error(`[${locale}] Missing translation: ${path}`);
      if (placeholders(translatedValue) !== placeholders(sourceValue)) {
        throw new Error(`[${locale}] Placeholder mismatch: ${path}`);
      }
    }
  }
}
