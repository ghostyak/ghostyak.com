import { NotesProduct } from "@/components/NotesProduct";
import { getNotesMetadata } from "@/i18n/notes-metadata";
import { defaultLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getNotesMetadata(defaultLocale);
}

export default function Page() {
  return <NotesProduct locale={defaultLocale} />;
}
