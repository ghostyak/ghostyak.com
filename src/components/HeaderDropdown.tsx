"use client";

import {
  useEffect,
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

type HeaderDropdownProps = {
  children: ReactNode;
  label: string;
  menuClassName: string;
};

export function HeaderDropdown({
  children,
  label,
  menuClassName,
}: HeaderDropdownProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const closeWhenOutside = (event: PointerEvent | FocusEvent) => {
      if (event.target instanceof Node && !details.contains(event.target)) {
        details.open = false;
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !details.open) return;

      event.preventDefault();
      details.open = false;
      details.querySelector("summary")?.focus();
    };

    document.addEventListener("pointerdown", closeWhenOutside);
    document.addEventListener("focusin", closeWhenOutside);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeWhenOutside);
      document.removeEventListener("focusin", closeWhenOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeAfterSelection = (event: MouseEvent<HTMLUListElement>) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      const details = detailsRef.current;
      if (!details) return;

      details.open = false;
      details.querySelector("summary")?.focus();
    }
  };

  return (
    <details
      ref={detailsRef}
      className="dropdown dropdown-end group"
      name="header-dropdown"
    >
      <summary className="btn btn-ghost min-h-11 list-none px-2 text-sm text-neutral-content hover:bg-neutral-content/10 sm:px-4">
        {label}
        <span
          className="text-xs transition-transform group-open:rotate-180 motion-reduce:transition-none"
          aria-hidden="true"
        >
          ▾
        </span>
      </summary>
      <ul className={menuClassName} onClick={closeAfterSelection}>
        {children}
      </ul>
    </details>
  );
}
