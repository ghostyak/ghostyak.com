import { NotesProduct } from "@/components/NotesProduct";
import { getNotesMetadata } from "@/i18n/notes-metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/notes">) {
  return getNotesMetadata(requirePrefixedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]/product/notes">) {
  return <NotesProduct locale={requirePrefixedLocale((await params).locale)} />;
}
