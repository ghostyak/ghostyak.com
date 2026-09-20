"use client";

import { Fragment, useId } from "react";
import { ArrowUpRight, ChevronDown, PanelsTopLeft, Clock3, ScanSearch, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const icons = { boxes: PanelsTopLeft, clock: Clock3, osints: ScanSearch, csvSearch: TableProperties };
type ProductLink = { name: string; href: string; icon: keyof typeof icons; external?: boolean; current?: boolean };
type ProductGroup = { id: string; label?: string; items: ProductLink[] };

export function ProductsDropdown({ label, groups }: { label: string; groups: ProductGroup[] }) {
  const menuId = useId();
  return <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild><Button variant="ghost" className="min-h-11 gap-1.5 px-2.5 sm:px-4">{label}<ChevronDown className="size-3.5 text-muted-foreground" aria-hidden="true" /></Button></DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-64 max-w-[calc(100vw-2rem)] p-2">
      {groups.map((group, index) => <Fragment key={group.id}>
        {index > 0 && <DropdownMenuSeparator />}
        {group.label && <DropdownMenuLabel id={`${menuId}-${group.id}`} className="px-3 pt-3 text-xs text-muted-foreground">{group.label}</DropdownMenuLabel>}
        <DropdownMenuGroup aria-labelledby={group.label ? `${menuId}-${group.id}` : undefined}>
          {group.items.map(item => {
            const Icon = icons[item.icon];
            return <DropdownMenuItem asChild key={item.name} className="min-h-12 gap-3 rounded-lg px-3">
              <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} aria-current={item.current ? "page" : undefined}>
                <Icon className="size-4 text-primary" aria-hidden="true" /><span className="min-w-0 flex-1">{item.name}</span>{item.external && <ArrowUpRight className="size-3.5" aria-hidden="true" />}
              </a>
            </DropdownMenuItem>;
          })}
        </DropdownMenuGroup>
      </Fragment>)}
    </DropdownMenuContent>
  </DropdownMenu>;
}
