type SocialIcon = "blog" | "instagram" | "threads" | "github";

type SocialLink = { href: string; icon: SocialIcon; label: string };

function SocialIcon({ icon }: { icon: SocialIcon }) {
  if (icon === "blog") {
    return (
      <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 3.5h8.25L19.5 8v12.5h-13z" />
        <path d="M14.5 3.75V8.5h4.75M9.5 12h7M9.5 15.5h7" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r=".8" className="fill-current stroke-none" />
      </svg>
    );
  }

  if (icon === "threads") {
    return (
      <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.8 10.1c-.4-3-2.1-4.7-4.8-4.7-3.4 0-5.5 2.5-5.5 6.5 0 4.2 2.2 6.7 5.7 6.7 2.9 0 5-1.7 5-4.2 0-2.2-1.6-3.6-4.1-3.6-2.2 0-3.7 1.1-3.7 2.7 0 1.3 1 2.2 2.5 2.2 2.7 0 4.8-2 4.9-5.6M15.1 8.1c2.2.7 3.7 2.3 4.1 4.5" />
      </svg>
    );
  }

  return (
    <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.8]" viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="fill-current stroke-none"
        d="M12 2.6a9.6 9.6 0 0 0-3 18.7c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 4-2.4 4.8-4.7 5.1.4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.6 9.6 0 0 0 12 2.6Z"
      />
    </svg>
  );
}

export function Footer({ labels }: { labels: Record<SocialIcon | "socials", string> }) {
  const socialLinks: SocialLink[] = [
    { href: "https://ghostyak.tistory.com/", icon: "blog", label: labels.blog },
    { href: "https://www.instagram.com/ghostyak/", icon: "instagram", label: labels.instagram },
    { href: "https://www.threads.com/@ghostyak", icon: "threads", label: labels.threads },
    { href: "https://github.com/ghostyak", icon: "github", label: labels.github },
  ];

  return (
    <footer className="footer bg-neutral px-5 py-8 text-neutral-content sm:footer-horizontal sm:items-center sm:justify-between">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GhostYak</p>
        <nav className="flex gap-2" aria-label={labels.socials}>
          {socialLinks.map(({ href, icon, label }) => (
            <a className="btn btn-circle btn-ghost min-h-11" key={icon} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <SocialIcon icon={icon} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
