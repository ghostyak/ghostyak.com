## Development

Use the Next.js App Router with TypeScript. Keep components as Server Components unless browser-only APIs or interaction require a Client Component.

Before committing a completed task, run:

```sh
npm run lint
npm run build
```

## Documentation

Full documentation: https://nextjs.org/docs/app

Keep `docs/ARCHITECTURE.md`, `docs/DEVELOPMENT.md`, and `docs/ROADMAP.md` aligned with public behavior and infrastructure changes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
