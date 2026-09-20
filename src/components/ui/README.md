# UI components

These components originate from the official [shadcn/ui New York registry](https://ui.shadcn.com/r/styles/new-york-v4/button.json), using Radix UI primitives and Tailwind CSS 4. The source is maintained locally under the [shadcn/ui MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Registry `cn` imports use the project's `@/lib/utils` helper. Theme tokens live in `src/app/globals.css`; CLI configuration lives in `components.json`.

For server-rendered links, wrap `buttonVariants(...)` in `cn(...)` when overriding sizing or wrapping utilities. Interactive Button components already merge their classes internally. Keep DropdownMenu and Accordion at small client boundaries.
