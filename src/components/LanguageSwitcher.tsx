"use client";

import { useEffect, useRef, useState, type FocusEvent } from "react";
import { localeConfig, publishedLocales, type PublishedLocale } from "@/i18n/locales";
import { unlocalizedPath } from "@/i18n/routing";

export function LanguageSwitcher({ currentLocale, currentPath, label }: { currentLocale: PublishedLocale; currentPath: string; label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentPath = unlocalizedPath(currentPath);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
  }

  return (
    <div className={`dropdown dropdown-end${isOpen ? " dropdown-open" : ""}`} onBlur={handleBlur} ref={containerRef}>
      <button
        aria-controls="language-menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        className="btn btn-ghost min-h-11 px-3 text-primary-content hover:bg-primary-content/10"
        onClick={() => setIsOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
        </svg>
        <span className="hidden xl:inline">{localeConfig[currentLocale].label}</span>
      </button>
      {isOpen ? (
        <ul className="menu dropdown-content z-50 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-xl" id="language-menu" role="menu">
          {publishedLocales.map((locale) => (
            <li key={locale} role="none">
              <a
                aria-current={locale === currentLocale ? "page" : undefined}
                className={locale === currentLocale ? "active font-bold" : ""}
                href={`/language/${locale}?returnTo=${encodeURIComponent(contentPath)}`}
                hrefLang={localeConfig[locale].htmlLanguage}
                lang={localeConfig[locale].htmlLanguage}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {localeConfig[locale].label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
