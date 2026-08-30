import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

const socialLinks = [
  { href: "https://www.instagram.com/ghostyak/", label: "Instagram" },
  { href: "https://www.threads.com/@ghostyak", label: "Threads" },
  { href: "https://github.com/ghostyak", label: "GitHub" },
] as const;

export function Footer({ labels, locale }: { labels: Dictionary["footer"]; locale: PublishedLocale }) {
  return (
    <footer className="footer bg-neutral px-5 py-10 text-neutral-content">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link className="text-xl font-black" href={localizedPath(locale, "/")}>GhostYak</Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-neutral-content/65">{labels.description}</p>
          <p className="mt-5 text-sm text-neutral-content/55">© {new Date().getFullYear()} GhostYak</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm" aria-label={labels.navigationLabel}>
          <Link className="link link-hover" href={localizedPath(locale, "/product/boxes")}>Boxes</Link>
          <Link className="link link-hover" href={localizedPath(locale, "/blog")}>{labels.blog}</Link>
          {socialLinks.map((link) => (
            <a className="link link-hover" href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
