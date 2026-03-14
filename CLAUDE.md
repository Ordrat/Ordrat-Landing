# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** landing page for Ordrat (restaurant/cafe ordering SaaS). Uses React 19, TypeScript, Tailwind CSS 4, GSAP animations, and Lenis smooth scrolling.

### i18n (English + Arabic)

Custom client-side locale system — **not** `next-intl` or similar library:

- Messages live in `messages/en.json` and `messages/ar.json`
- `src/app/i18n/messages.ts` re-exports both with `Locale = 'en' | 'ar'`
- `src/context/LocaleContext.tsx` provides `useLocale()` hook with `t(key)` for strings and `tList(key)` for arrays
- Locale is persisted in `localStorage` under `app-locale`
- RTL: toggled by adding `locale-ar` / `locale-en` classes to `<body>` and setting `dir` on `<html>`
- Arabic font (Tajawal) is swapped in via CSS: `body.locale-ar` overrides to `var(--font-tajawal)`

All components that render user-visible text should consume `useLocale()` and call `t('some.dot.separated.key')`.

**URL-based locale routing**: `src/app/[lang]/` handles `/en` and `/ar` routes. `src/components/shared/LocaleSync.tsx` reads `params.lang` and syncs the locale via `setLocale()`. The root locale persists in `localStorage`; the URL simply overrides it on navigation. `generateStaticParams` pre-renders both locales at build time.

### Dynamic Route Folder Naming

`folder-rename.ts` handles a cross-platform issue: some package managers don't support `[bracket]` folder names. The `postinstall` script runs `tsx folder-rename.ts --utb` to convert `_slug_` → `[slug]` after `npm install`. When committing, dynamic route folders are stored as `_slug_` (underscores) in git. Do not manually rename them.

### Contexts

| Context | Hook | Purpose |
|---|---|---|
| `AppContext` | `useAppContext()` | Top navigation bar visibility state (persisted in localStorage) |
| `LocaleContext` | `useLocale()` | i18n locale, RTL flag, `t()`, `tList()` |
| `MobileMenuContext` | via hook | Mobile menu open/close |
| `ModalContext` | via hook | Video/generic modal state |
| `TabContext` | via hook | Tab active state |

### Content Management

Static content is file-system based:

- **Markdown** (`src/data/blogs/`, `case-study/`, `services/`, `team/`, `whitepaper/`, `customer/`, `career/`) — parsed with `gray-matter` via `src/utils/getMarkDownContent.ts` / `getMarkDownData.ts`
- **JSON** (`src/data/json/`) — changelog, faq, glossary, testimonials
- **TypeScript** (`src/data/*.ts`) — achievements, faq

### Styling

Tailwind CSS 4 (PostCSS plugin, no `tailwind.config.js`). Global CSS entry: `src/app/globals.css` which imports from `src/styles/`:

- `variables.css` — CSS custom properties (colors, spacing)
- `icon-font.css` — custom icon font (from `public/fonts/`)
- `typography.css`, `button.css`, `badge.css` — utility classes
- `header.css`, `custom-swiper.css`, `lenis.css` — component-specific overrides

Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))` (class-based via `next-themes`).

### Path Alias

`@/` maps to `src/` (configured in `tsconfig.json`).

### SEO

Use `src/utils/generateMetaData.ts` in every `page.tsx` to export `metadata`.
