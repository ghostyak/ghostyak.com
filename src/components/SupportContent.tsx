import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Globe, HandHeart, Megaphone, MessageSquare, Share2, Sparkles, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHero, heroActionClassName } from "@/components/PageHero";
import { SectionHeading, textLink } from "@/components/ProductLanding";
import { socialLinks } from "@/data/social";
import { supportLinkName, supportLinks } from "@/data/support";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { formatMessage, localizedPath } from "@/i18n/routing";
import { cn } from "@/lib/utils";

// Same order as supportPage.uses.items.
const useIcons = [Sparkles, Wrench, Globe];

function IconTile({ icon: Icon }: { icon: typeof HandHeart }) {
  return <span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-ink text-brand"><Icon className="size-5" aria-hidden="true" /></span>;
}

// Official logos keep their own colors, so they sit on white instead of the ink tile.
function ServiceLogo({ logo, className }: { logo: { src: string; width: number; height: number }; className: string }) {
  return <Image src={logo.src} width={logo.width} height={logo.height} alt="" unoptimized className={cn("object-contain", className)} />;
}

// Support landing: hero, external support methods, where support goes, non-monetary help and a thank-you band.
export async function SupportContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.supportPage;
  const productsHref = `${localizedPath(locale, "/")}#products`;
  const methods = supportLinks.map(link => {
    const name = supportLinkName(link, locale);
    return { ...link, name, action: formatMessage(copy.methods.action, { name }) };
  });

  return <main id="main-content" className="[overflow-wrap:anywhere]">
    <section className="px-4 sm:px-8" aria-labelledby="support-title">
      <PageHero
        id="support-title"
        eyebrow={<Badge className="min-h-7 gap-2 rounded-full bg-ink px-3 text-white"><HandHeart className="size-3 text-brand" aria-hidden="true" />{dictionary.header.support}</Badge>}
        title={copy.title}
        description={copy.description}
        actions={<>
          <a className={cn(buttonVariants({ size: "lg", className: heroActionClassName }))} href="#methods">{copy.methodsAction}<ArrowDown aria-hidden="true" /></a>
          <a className={cn(buttonVariants({ variant: "outline", size: "lg", className: heroActionClassName }))} href={productsHref}>{copy.productsAction}<ArrowRight aria-hidden="true" /></a>
        </>}
      />
    </section>

    <section id="methods" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="support-methods">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="support-methods" eyebrow={copy.methods.eyebrow} title={copy.methods.title} description={copy.methods.description} />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">{methods.map(method => <li key={method.id} className="flex flex-col rounded-3xl border bg-card p-6 sm:p-8">
          <span className="mb-5 flex size-14 items-center justify-center rounded-2xl border bg-white p-2.5"><ServiceLogo logo={method.logo} className="size-full" /></span>
          <h3 className="text-xl font-semibold tracking-tight">{method.name}</h3>
          <p className="mb-7 mt-2 text-sm leading-7 text-muted-foreground">{copy.methods.items[method.id]}</p>
          <a className={cn(buttonVariants({ size: "lg", className: cn(heroActionClassName, "mt-auto w-fit") }))} href={method.url} target="_blank" rel="noreferrer">{method.action}<ArrowUpRight aria-hidden="true" /></a>
        </li>)}</ul>
      </div>
    </section>

    <section className="border-y bg-muted/50 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="support-uses">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="support-uses" eyebrow={copy.uses.eyebrow} title={copy.uses.title} />
        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">{copy.uses.items.map((item, index) => <li key={item.title} className="rounded-3xl border bg-card p-6">
          <IconTile icon={useIcons[index]} />
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
        </li>)}</ul>
      </div>
    </section>

    <section className="px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="support-other">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="support-other" eyebrow={copy.other.eyebrow} title={copy.other.title} />
        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          <li className="flex flex-col rounded-3xl border bg-card p-6"><IconTile icon={Megaphone} /><h3 className="font-semibold">{copy.other.share.title}</h3><p className="mb-4 mt-2 text-sm leading-7 text-muted-foreground">{copy.other.share.description}</p><a className={cn(textLink, "mt-auto w-fit")} href={productsHref}>{copy.productsAction}<ArrowRight className="size-3.5" aria-hidden="true" /></a></li>
          <li className="flex flex-col rounded-3xl border bg-card p-6"><IconTile icon={MessageSquare} /><h3 className="font-semibold">{copy.other.feedback.title}</h3><p className="mb-4 mt-2 text-sm leading-7 text-muted-foreground">{copy.other.feedback.description}</p><a className={cn(textLink, "mt-auto w-fit")} href={socialLinks.github.href} target="_blank" rel="noreferrer">{copy.other.feedback.action}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></li>
          <li className="flex flex-col rounded-3xl border bg-card p-6"><IconTile icon={Share2} /><h3 className="font-semibold">{copy.other.follow.title}</h3><p className="mb-4 mt-2 text-sm leading-7 text-muted-foreground">{copy.other.follow.description}</p><div className="mt-auto flex flex-wrap gap-x-5">{[socialLinks.instagram, socialLinks.threads].map(link => <a key={link.label} className={textLink} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>)}</div></li>
        </ul>
      </div>
    </section>

    <section className="surface-ink px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="support-thanks">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div><span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30"><HandHeart className="size-6" aria-hidden="true" /></span><h2 id="support-thanks" className="text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{copy.thanks.title}</h2><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{copy.thanks.description}</p></div>
        <div className="flex max-w-full flex-wrap gap-3 md:justify-end">{methods.map((method, index) => <a key={method.id} className={cn(buttonVariants({ variant: index === 0 ? "default" : "outline", size: "lg", className: heroActionClassName }))} href={method.url} target="_blank" rel="noreferrer"><span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white p-0.5"><ServiceLogo logo={method.logo} className="size-full" /></span>{method.action}</a>)}</div>
      </div>
    </section>
  </main>;
}
