import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com/ghostyak/", label: "Instagram" },
  { href: "https://www.threads.com/@ghostyak", label: "Threads" },
  { href: "https://github.com/ghostyak", label: "GitHub" },
] as const;

export function Footer() {
  return (
    <footer className="footer bg-neutral px-5 py-10 text-neutral-content">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link className="text-xl font-black" href="/">GhostYak</Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-neutral-content/65">
            일상의 Windows 작업 공간을 더 단순하게 만드는 소프트웨어.
          </p>
          <p className="mt-5 text-sm text-neutral-content/55">© {new Date().getFullYear()} GhostYak</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm" aria-label="푸터 메뉴">
          <Link className="link link-hover" href="/product/boxes">Boxes</Link>
          <Link className="link link-hover" href="/blog">블로그</Link>
          {socialLinks.map((link) => (
            <a className="link link-hover" href={link.href} key={link.label} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
