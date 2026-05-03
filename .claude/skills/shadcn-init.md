---
name: shadcn-init
description: "Initialize shadcn/ui in the current project. Detects or prompts for the framework (next, vite, react-router, laravel, astro), then runs `npx shadcn@latest init -t [framework]`. Use when: setting up shadcn, adding component library, initializing UI components, shadcn init, install shadcn."
---

# shadcn/ui Initializer

Initialize shadcn/ui for the current project by detecting the framework and running the correct init command.

## Supported Templates

| Template | Use for |
|---|---|
| `next` | Next.js (App Router or Pages Router) |
| `start` | TanStack Start |
| `vite` | Vite + React |
| `react-router` | React Router v7 |
| `laravel` | Laravel + Inertia |
| `astro` | Astro |

## Steps to Follow

1. **Detect framework** — Check `package.json` dependencies for: `next`, `vite`, `react-router`, `@tanstack/start`, `laravel`, `astro`.
2. **If no `package.json` exists** — Tell the user shadcn requires a framework project and ask which template to scaffold, then run:
   ```bash
   npx shadcn@latest init -t [framework] -y
   ```
3. **If framework is detected** — Run immediately:
   ```bash
   npx shadcn@latest init -t [detected-framework] -y
   ```
4. **After init** — Confirm `components.json` was created and show the user how to add their first component:
   ```bash
   npx shadcn@latest add button
   ```

## Notes

- Always pass `-y` to skip confirmation prompts unless the user asks to review options.
- Use `--css-variables` (default) for theming — do not pass `--no-css-variables` unless the user specifically requests it.
- If the user wants RTL support, add `--rtl`.
- After init, the `components/ui/` directory is the home for all shadcn components.
