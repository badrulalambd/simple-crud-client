<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project

Next.js 16 (App Router) frontend for a **separate CRUD backend** that must run at `http://localhost:5000`. The URL is hardcoded in every `fetch` (no env var, no `.env` file), and API responses are MongoDB-style (`_id`, `insertedId`, `deletedCount`). The `/users` pages error without the backend up. There are no API routes in this repo.

Routes: `/`, `/users` (server component that fetches the list), `/users/[userid]`, `/users/adduser` (client-side form).

## Commands

- `npm run dev` — dev server
- `npm run lint` — flat-config ESLint; passes (1 pre-existing unused-var warning in `app/users/[userid]/page.tsx`)
- `npm run typecheck` — `tsc --noEmit`; **currently fails** with ~6 implicit-any errors (untyped props/event handlers in `components/UsersCard.tsx`, `components/UpdateUserDialog.tsx`, `app/users/**`). Don't assume a green baseline; adding types to files you touch is fine.
- `npm run format` — Prettier over `**/*.{ts,tsx}` only. Style: no semicolons, double quotes, LF, tailwind class sorting via `prettier-plugin-tailwindcss`.
- No test suite, no CI workflows.

## Conventions

- shadcn/ui is built on **Base UI** (`@base-ui/react`), style `base-nova` in `components.json` — *not* Radix. Add components with `npx shadcn@latest add <name>` (they land in `components/ui/`); don't hand-write Radix-based versions.
- `cn` comes from the `cn` npm package, re-exported by `@/lib/utils` (not the usual clsx/tailwind-merge implementation).
- Path alias `@/*` maps to the repo root (`@/components`, `@/lib`, ...).
- Tailwind CSS v4 via `@tailwindcss/postcss` — no `tailwind.config`; theme tokens live in `app/globals.css`.
- `CLAUDE.md` is just `@AGENTS.md`; this file is the single source of agent instructions.
