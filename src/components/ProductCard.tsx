import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ProductBadge = { label: string; tone?: "free" | "category" | "plain" };

const badgeTone = {
  free: "border-transparent bg-brand text-ink",
  category: "border-transparent bg-ink text-white",
  plain: "",
} as const;

// Home product card: fixed 240px preview, then name, badges, description and one action.
export function ProductCard({ id, name, badges, description, preview, action }: {
  id?: string;
  name: string;
  badges: ProductBadge[];
  description: string;
  preview: ReactNode;
  action: { label: string; href: string; external?: boolean };
}) {
  const Icon = action.external ? ArrowUpRight : ArrowRight;
  return <Card className="group gap-0 overflow-hidden rounded-3xl border-border/80 py-0 shadow-lg shadow-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 motion-reduce:hover:translate-y-0">
    <article id={id} className="flex h-full scroll-mt-24 flex-col">
      <div className="h-60 shrink-0 overflow-hidden">{preview}</div>
      <CardContent className="flex flex-1 flex-col items-start border-t p-6 sm:p-8">
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{name}</h2>
          <div className="flex flex-wrap gap-2">{badges.map(badge => <Badge key={badge.label} variant="outline" className={cn("min-h-6 px-2.5", badgeTone[badge.tone ?? "plain"])}>{badge.label}</Badge>)}</div>
        </div>
        <p className="mb-7 mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
        <a
          className={cn(buttonVariants({ variant: "outline", className: "mt-auto h-auto min-h-11 max-w-full whitespace-normal rounded-full py-3 group-hover:border-ink group-hover:bg-ink group-hover:text-white" }))}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
        >
          {action.label}<Icon className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
        </a>
      </CardContent>
    </article>
  </Card>;
}
