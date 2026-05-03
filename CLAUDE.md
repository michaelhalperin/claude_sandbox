# CLAUDE.md — Website Build Guide

This file documents the exact, error-free workflow for building websites in this environment using the **UI/UX Pro Max skill** and **Magic MCP**.

---

## Environment Facts (Read First)

| Constraint | Detail |
|---|---|
| Node | v22 |
| npm | v10 |
| Python | 3.11 (required by UI/UX Pro Max skill) |
| `ui.shadcn.com` | **BLOCKED** — `npx shadcn init` will always fail. Use manual setup below. |
| `21st.dev` | **BLOCKED** — Magic MCP component fetching fails. Use it for inspiration text only; do not rely on it for code. |

---

## Step 1 — Query the UI/UX Pro Max Skill

Before writing a single line of code, get design recommendations from the skill. Run the search script directly:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark SaaS landing page" 2>/dev/null
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism bento grid" 2>/dev/null
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "font pairing modern tech" 2>/dev/null
```

The script returns: style recommendations, color palettes, font pairings, and layout patterns. **Record the output before building.** Key data files:

- `data/colors.csv` — 96 palettes keyed by product type (SaaS, AI, Fintech, etc.)
- `data/typography.csv` — 57 font pairings with Google Fonts URLs
- `data/styles.csv` — 67 styles with CSS variables and implementation checklists
- `data/landing.csv` — landing page section-order patterns

---

## Step 2 — Scaffold the React Vite Project

**Do NOT scaffold into the current directory** (`--force` will be cancelled). Always scaffold into a named subdirectory:

```bash
npx create-vite@latest <project-name> --template react-ts
cd <project-name>
npm install
```

---

## Step 3 — Manual shadcn/ui Setup (replaces `npx shadcn init`)

`npx shadcn@latest init` and `npx shadcn@2.5.0 init` both fetch from `ui.shadcn.com`, which is blocked. Follow these steps exactly instead.

### 3a — Install all dependencies in one shot

```bash
npm install -D tailwindcss@3 postcss autoprefixer @types/node
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react
npm install @radix-ui/react-slot @radix-ui/react-separator
npx tailwindcss init -p
```

> **Tailwind version:** Always use `tailwindcss@3`. Tailwind v4 has a completely different config format and is not compatible with this setup.

### 3b — `tailwind.config.js`

Replace the generated file entirely:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],  // ← MUST be require(), not await import()
}
```

> **Critical:** Never use `(await import("tailwindcss-animate")).default` in this file. Tailwind's config loader (`jiti`) does not support top-level `await`. It will throw `SyntaxError: Unexpected identifier 'Promise'` at build time.

### 3c — `tsconfig.json` (root)

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] },
    "ignoreDeprecations": "6.0"
  }
}
```

> **Why `ignoreDeprecations`:** TypeScript 6+ deprecates `baseUrl` and will error without this flag. The shadcn `@/*` alias requires `baseUrl`.

### 3d — `tsconfig.app.json`

Add these two lines inside `compilerOptions`:

```json
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

### 3e — `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
```

### 3f — `src/index.css`

Replace the entire file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
  }
}

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
```

### 3g — `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 3h — `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 3i — Verify setup

```bash
npx tsc --noEmit   # must exit 0 with no output
npx vite build     # must produce dist/ with no errors
```

---

## Step 4 — Adding shadcn Components

Since `npx shadcn add <component>` also fetches from `ui.shadcn.com`, create components manually in `src/components/ui/`. The pattern is always the same:

**Button** — needs `@radix-ui/react-slot`, `class-variance-authority`  
**Card** — no extra deps  
**Badge** — needs `class-variance-authority`  
**Input** — no extra deps  
**Separator** — needs `@radix-ui/react-separator`  
**Dialog** — needs `@radix-ui/react-dialog`  
**Select** — needs `@radix-ui/react-select`  
**Tabs** — needs `@radix-ui/react-tabs`  

Install the radix package first, then copy the component source from the working examples in `nexus/src/components/ui/` in this repo, or from the shadcn docs.

---

## Step 5 — Building the UI

### Apply skill recommendations

Use the skill output from Step 1 to set:
- Background and accent colors (override Tailwind CSS vars or use inline styles)
- Font imports in `index.html` (`<link>` from Google Fonts)
- Layout pattern (bento grid, hero+features+CTA, etc.)

### UI/UX rules to always follow (from the skill)

- **Touch targets:** All buttons/links `min-h-[44px]` minimum
- **Contrast:** Dark text on light bg, light text on dark bg — check visually
- **Focus states:** Never remove `focus-visible:ring-*` from interactive elements
- **Reduced motion:** Wrap animations: `@media (prefers-reduced-motion: reduce)`
- **Icons:** Use inline SVG or `lucide-react` — never emojis as icons
- **Hover:** `transition-colors` or `transition-all duration-200` on interactive elements
- **Body text:** `leading-relaxed` (1.5–1.75 line height), max ~65 chars per line

### Dark background pattern used in this repo

```tsx
<div className="min-h-screen bg-[#080810] text-slate-200 antialiased overflow-x-hidden">
```

Custom accent colors live as inline Tailwind arbitrary values (`bg-violet-600`, `text-cyan-400`) rather than overriding CSS vars, which keeps things simpler for one-off sites.

---

## Magic MCP — Current Status

The Magic MCP (`@21st-dev/magic`) is installed and connected. However, **`21st.dev` is network-blocked in this sandbox**, so `mcp__magic__21st_magic_component_builder` and `mcp__magic__21st_magic_component_inspiration` will return a JSON parse error when they try to fetch components.

**Workaround:** Use it only for structural inspiration — the tool call will fail but the error message sometimes includes partial useful text. Do not block the build waiting for it. Fall back to the UI/UX Pro Max skill data instead.

When running outside this sandbox (locally, on CI with internet), Magic MCP works fully and can generate complete component code.

---

## Common Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `SyntaxError: Unexpected identifier 'Promise'` | `await import()` in `tailwind.config.js` | Use `require("tailwindcss-animate")` |
| `Option 'baseUrl' is deprecated` | TypeScript 6+ | Add `"ignoreDeprecations": "6.0"` to `tsconfig.json` compilerOptions |
| `You are not authorized to access ui.shadcn.com` | Network block | Skip `npx shadcn init`, use Step 3 manual setup |
| `Host not in allowlist` (Magic MCP) | Network block | Expected — fall back to UI/UX Pro Max skill |
| `Operation cancelled` on `npx create-vite . --force` | Can't scaffold in non-empty dir | Scaffold to a named subdirectory instead |
| `No Tailwind CSS configuration found` | CSS missing `@tailwind` directives | Replace `index.css` per Step 3f |
| `No import alias found in tsconfig` | `tsconfig.json` missing `paths` | Add `baseUrl` + `paths` per Step 3c |
| Shadcn component styles not applying | Default `App.css` conflicting | Clear `App.css` to a single comment |

---

## Quick Checklist

```
□ Queried UI/UX Pro Max skill for style, color, font recommendations
□ Scaffolded into a named subdirectory (not current dir)
□ Installed tailwindcss@3 (not v4)
□ tailwind.config.js uses require() for plugins (not await import)
□ tsconfig.json has baseUrl + paths + ignoreDeprecations: "6.0"
□ tsconfig.app.json has baseUrl + paths
□ vite.config.ts has path alias @ → ./src
□ index.css starts with @tailwind base/components/utilities
□ components.json created
□ src/lib/utils.ts created with cn()
□ App.css cleared
□ npx tsc --noEmit passes
□ npx vite build passes
```
