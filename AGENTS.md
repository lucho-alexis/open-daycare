<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Repository

- This is a single npm package. Use `package-lock.json` as the dependency source of truth and install with `npm ci`.
- This is a Next.js 16.3.1 App Router app. The `/` route starts at `app/page.tsx`; root metadata, fonts, and layout are in `app/layout.tsx`; global Tailwind v4/PostCSS styles are in `app/globals.css`.
- `references/pantallas/` and `references/screenshots/` contain UI references, not runtime routes. Consult them before changing the product UI.

## Commands

- `npm run dev` starts the local server at `http://localhost:3000`.
- `npm run lint` runs ESLint but currently fails on the checked-in reference helper `references/pantallas/support.js`; `npm run build` creates the production build, and `npm run start` should only run after a successful build.
- There is no test or typecheck script in `package.json`; use `npx tsc --noEmit` for a direct typecheck when needed.

## MCP's

- Keep Playwright screenshots and other Playwright artifacts in `.playwright-mcp/`.
- Use Context7 for current Next.js or other framework documentation instead of relying on remembered APIs.


## Spec Driven Development
- /spec Usaremos esta skill para crear las especificaciones.
- /spec-impl usaremos esta skill para hacer las implementaciones.


## Reglas de codigo

- Usar codigo limpio, nombres, funciones, variables, etc. codigo en ingles.