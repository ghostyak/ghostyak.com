import type { Dictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";

// One fixed instant keeps every city's time and date consistent, including DST.
const previewInstant = new Date("2026-09-05T02:38:00Z");
const cities = [
  { zone: "Asia/Seoul", offset: "UTC+9", symbol: "☀" },
  { zone: "Europe/London", offset: "UTC+1", symbol: "☾" },
  { zone: "America/Los_Angeles", offset: "UTC−7", symbol: "☀" },
  { zone: "America/New_York", offset: "UTC−4", symbol: "☾" },
  { zone: "America/Vancouver", offset: "UTC−7", symbol: "☀" },
] as const;

export function WorldClockPreview({ copy, locale }: { copy: Dictionary["worldClock"]; locale: PublishedLocale }) {
  const language = localeConfig[locale].htmlLanguage;

  return (
    <figure className="min-w-0">
      <div className="card overflow-hidden border border-neutral-content/20 bg-neutral text-neutral-content shadow-2xl">
        <div className="flex items-center gap-3 border-b border-neutral-content/15 px-5 py-4 sm:px-7">
          <svg className="size-6 shrink-0 fill-none stroke-info [stroke-width:1.5]" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></svg>
          <span className="text-sm font-black tracking-wider">{copy.widgetTitle}</span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-neutral-content/10 p-px sm:grid-cols-5">
          {cities.map((city, index) => (
            <div key={city.zone} className={`min-w-0 bg-neutral px-2 py-6 text-center ${index === 0 ? "border-t-2 border-info bg-info/10" : "border-t-2 border-transparent"} ${index === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
              <p className={`min-h-10 text-xs font-bold sm:text-sm ${index === 0 ? "text-info" : "text-neutral-content"}`}>{copy.cities[index]}</p>
              <p className="text-4xl font-light tracking-tight tabular-nums lg:text-5xl">{new Intl.DateTimeFormat(language, { timeZone: city.zone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(previewInstant)}</p>
              <p className="mt-3 text-xs text-neutral-content/70">{new Intl.DateTimeFormat(language, { timeZone: city.zone, month: "short", day: "numeric", weekday: "short" }).format(previewInstant)}</p>
              <span className="badge badge-outline mt-3 border-info/40 text-xs text-info">{city.offset}</span>
              <span className={`mt-3 block text-2xl ${city.symbol === "☾" ? "text-info" : "text-warning"}`} aria-hidden="true">{city.symbol}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs leading-5 text-base-content/60">{copy.previewCaption}</figcaption>
    </figure>
  );
}
