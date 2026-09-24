import type { NavIcon } from "@/components/NavDropdown";
import type { PublishedLocale } from "@/i18n/locales";

type SupportLink = {
  name: string;
  // Service names are not translated; override only where the service uses a local name.
  names?: Partial<Record<PublishedLocale, string>>;
  url: string;
  icon: NavIcon;
};

// 새 후원 수단(예: 토스아이디)은 이 목록에 추가하면 헤더 후원 메뉴와 푸터에 함께 표시된다.
export const supportLinks: readonly SupportLink[] = [
  { name: "Buy Me a Coffee", url: "https://buymeacoffee.com/ghostyak", icon: "coffee" },
  { name: "ctee", names: { ko: "크티" }, url: "https://ctee.kr/place/ghostyak/donation", icon: "gift" },
];

export function supportLinkName(link: SupportLink, locale: PublishedLocale) {
  return link.names?.[locale] ?? link.name;
}
