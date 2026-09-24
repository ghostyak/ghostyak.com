"use client";

import { Fragment, useId } from "react";
import { ArrowUpRight, ChevronDown, Clock3, Coffee, FolderClock, Gift, HandHeart, PanelsTopLeft, ScanSearch, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Icon keys keep the server-to-client props serializable.
const icons = { boxes: PanelsTopLeft, clock: Clock3, osints: ScanSearch, folderHistory: FolderClock, csvSearch: TableProperties, support: HandHeart, coffee: Coffee, gift: Gift };
export type NavIcon = keyof typeof icons;
export type NavLink = { name: string; href: string; icon: NavIcon; external?: boolean; current?: boolean };
type NavGroup = { id: string; label?: string; items: NavLink[] };

// Header menu. With triggerIcon, the label collapses to the icon below 640px and stays as the accessible name.
export function NavDropdown({ label, groups, triggerIcon }: { label: string; groups: NavGroup[]; triggerIcon?: NavIcon }) {
  const menuId = useId();
  const TriggerIcon = triggerIcon ? icons[triggerIcon] : null;
  return <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild><Button variant="ghost" className="min-h-11 gap-1.5 rounded-full px-2.5 sm:px-4" aria-label={TriggerIcon ? label : undefined}>{TriggerIcon && <TriggerIcon className="size-4 text-brand-foreground" aria-hidden="true" />}{TriggerIcon ? <span className="hidden sm:inline">{label}</span> : label}<ChevronDown className={TriggerIcon ? "hidden size-3.5 text-muted-foreground sm:block" : "size-3.5 text-muted-foreground"} aria-hidden="true" /></Button></DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-64 max-w-[calc(100vw-2rem)] rounded-2xl p-2 shadow-xl shadow-ink/10">
      {groups.map((group, index) => <Fragment key={group.id}>
        {index > 0 && <DropdownMenuSeparator />}
        {group.label && <DropdownMenuLabel id={`${menuId}-${group.id}`} className="px-3 pt-3 text-xs text-muted-foreground">{group.label}</DropdownMenuLabel>}
        <DropdownMenuGroup aria-labelledby={group.label ? `${menuId}-${group.id}` : undefined}>
          {group.items.map(item => {
            const Icon = icons[item.icon];
            return <DropdownMenuItem asChild key={item.name} className="min-h-12 gap-3 rounded-lg px-3">
              <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} aria-current={item.current ? "page" : undefined}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink text-brand"><Icon className="size-4" aria-hidden="true" /></span><span className="min-w-0 flex-1">{item.name}</span>{item.external && <ArrowUpRight className="size-3.5" aria-hidden="true" />}
              </a>
            </DropdownMenuItem>;
          })}
        </DropdownMenuGroup>
      </Fragment>)}
    </DropdownMenuContent>
  </DropdownMenu>;
}
