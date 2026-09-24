import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";

export const supportPagePath = "/support";

type SupportLink = {
  // Matches the method description key in supportPage.methods.items.
  id: keyof Dictionary["supportPage"]["methods"]["items"];
  name: string;
  // Service names are not translated; override only where the service uses a local name.
  names?: Partial<Record<PublishedLocale, string>>;
  url: string;
  // Official service logo, served unmodified from public/images/support.
  logo: { src: string; width: number; height: number };
};

// 새 후원 수단(예: 토스아이디)은 이 목록과 사전의 supportPage.methods.items에 추가하면 후원 페이지와 푸터에 함께 표시된다.
export const supportLinks: readonly SupportLink[] = [
  { id: "buyMeACoffee", name: "Buy Me a Coffee", url: "https://buymeacoffee.com/ghostyak", logo: { src: "/images/support/buymeacoffee.svg", width: 35, height: 50 } },
  { id: "ctee", name: "ctee", names: { ko: "크티" }, url: "https://ctee.kr/place/ghostyak/donation", logo: { src: "/images/support/ctee.svg", width: 200, height: 201 } },
];

export function supportLinkName(link: SupportLink, locale: PublishedLocale) {
  return link.names?.[locale] ?? link.name;
}
