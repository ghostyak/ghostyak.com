"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ProductsDropdown({ label, children }: { label: string; children: ReactNode }) {
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      const dropdown = dropdownRef.current;
      if (dropdown && event.target instanceof Node && !dropdown.contains(event.target)) {
        dropdown.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      ref={dropdownRef}
      className="dropdown"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.preventDefault();
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary className="btn btn-ghost min-h-11 gap-1 px-3 text-primary-content hover:bg-primary-content/10 sm:px-4">
        {label}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0" stroke="currentColor" strokeWidth="1.5">
          <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <ul
        className="dropdown-content menu z-50 mt-2 w-52 rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-lg"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            if (dropdownRef.current) dropdownRef.current.open = false;
          }
        }}
      >
        {children}
      </ul>
    </details>
  );
}
