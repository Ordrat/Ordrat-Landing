<!--
  SYNC IMPACT REPORT
  ==================
  Version change: (template) → 1.0.0
  Modified principles: N/A — initial ratification
  Added sections:
    - Core Principles (I–V)
    - Tech Stack Constraints
    - Development Workflow
    - Governance
  Removed sections: None (all placeholders replaced)
  Templates requiring updates:
    - .specify/templates/plan-template.md ✅ Constitution Check gates aligned
    - .specify/templates/spec-template.md ✅ No mandatory sections removed/added
    - .specify/templates/tasks-template.md ✅ Task categories consistent with principles
    - .specify/templates/checklist-template.md ✅ No changes required
  Deferred TODOs: None
-->

# Ordrat Landing Constitution

## Core Principles

### I. i18n-First (NON-NEGOTIABLE)

Every user-visible string MUST be served through the `useLocale()` hook using `t('dot.separated.key')`
or `tList('dot.separated.key')`. Hardcoded English (or Arabic) text in JSX is a constitution violation.

- Strings live in `messages/en.json` and `messages/ar.json`; both files MUST be kept in sync.
- RTL layout MUST be verified for every UI change — the `locale-ar` body class and `html[dir]`
  attribute drive all RTL styling; do not override `direction` inline.
- The Arabic Tajawal font is applied automatically via CSS (`body.locale-ar`); do not set font
  families per-component.
- Locale is persisted in `localStorage` under `app-locale`; URL-based routing (`/en`, `/ar`) syncs
  via `LocaleSync`—do not duplicate this logic in components.

**Rationale**: Ordrat targets both Arabic and English restaurant markets. RTL correctness and content
parity are business requirements, not nice-to-haves.

### II. Component Boundaries

Components MUST be colocated in the folder that reflects their scope:

- `src/components/home/` — sections rendered exclusively on the landing page
- `src/components/shared/` — reusable UI primitives and layout elements

A component MUST have a single, clearly named responsibility. "God" components that combine
unrelated concerns MUST be split. No business logic is permitted in presentational components;
data fetching and transformation belong in utils or page-level files.

**Rationale**: The landing page grows section by section; clear boundaries prevent tangled
dependencies and make incremental changes safe.

### III. Design System Adherence

Brand colors MUST be referenced exclusively via CSS custom properties—never as raw hex values
in class names or inline styles:

- Primary red: `var(--color-ordrat-red-main)` (`#D63848`)
- Primary blue: `var(--color-ordrat-blue-main)` (`#003049`)

Spacing, typography, and radius values MUST come from the Tailwind 4 scale defined in
`src/app/globals.css` and the files it imports from `src/styles/`. No `tailwind.config.js`
exists; new design tokens MUST be added to `variables.css`.

All images MUST use the Next.js `<Image>` component to enforce optimisation and prevent
layout shifts. SVG icons use the custom icon font (`public/fonts/`) via CSS classes defined
in `src/styles/icon-font.css`.

**Rationale**: Visual consistency and Core Web Vitals scores are marketing requirements for a
SaaS landing page.

### IV. No Unnecessary Complexity (YAGNI)

Features, abstractions, and dependencies MUST NOT be added speculatively. The criterion is:
"Is this needed for the current, defined requirement?"

- Utility functions MUST NOT be created for single-use operations; inline the logic instead.
- Third-party libraries MUST NOT be added without an explicit requirement; prefer browser APIs
  and existing dependencies first.
- No test suite is configured; do not add one unless explicitly requested.
- Comments are required only where intent is non-obvious; do not add JSDoc to every function.

**Rationale**: Landing pages have narrow scope; premature abstraction increases maintenance cost
without adding user value.

### V. Accessibility & Performance

Every interactive element MUST be keyboard-navigable and carry appropriate ARIA attributes
when semantic HTML alone is insufficient. Color contrast MUST meet WCAG AA minimums for both
brand colors.

Animations (GSAP, Lenis) MUST respect `prefers-reduced-motion`. Scroll-jacking or blocking
animations MUST have a reduced-motion fallback.

Next.js App Router conventions MUST be followed: `'use client'` is added only when strictly
necessary (event handlers, hooks, browser APIs); static rendering is preferred.

**Rationale**: Accessibility is a legal baseline and directly impacts SEO ranking for the
landing page.

## Tech Stack Constraints

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js App Router | 16 |
| UI library | React | 19 |
| Language | TypeScript | latest (strict) |
| Styling | Tailwind CSS 4 (PostCSS plugin) | 4 |
| Animation | GSAP + Lenis smooth scroll | current |
| i18n | Custom (`LocaleContext`) | N/A |
| Path alias | `@/` → `src/` | — |

- No `tailwind.config.js` — configuration lives in CSS (`@theme` blocks in `globals.css`).
- No test runner is configured; integration testing is done via manual QA and Playwright
  if added.
- Dynamic route folders use underscore convention in git (`_slug_`) and are renamed to bracket
  form by the `postinstall` script (`folder-rename.ts --utb`). Do not manually rename these.

## Development Workflow

1. **Branch naming**: `###-feature-name` matching the spec folder under `specs/`.
2. **Linting/Formatting**: `npm run lint:fix` and `npm run format` MUST be run before committing.
   CI enforces `npm run lint` and `npm run format:check`.
3. **Dev server**: `npm run dev` starts Turbopack at `http://localhost:3000`.
4. **Locale testing**: MUST manually verify every UI change in both `en` and `ar` at both
   `/en` and `/ar` routes, checking LTR and RTL layout.
5. **Images**: New images are placed in `public/` and referenced via Next.js `<Image>`.
   WebP is the preferred format for photographs; SVG for icons.
6. **SEO**: Every `page.tsx` MUST export `metadata` generated via `src/utils/generateMetaData.ts`.
7. **No breaking changes to the i18n key structure** without updating both message files and all
   components that reference the changed keys in the same commit.

## Governance

This constitution supersedes all informal conventions. When a practice described elsewhere
(comments, READMEs, prior PRs) conflicts with this document, this document takes precedence.

**Amendment procedure**:
1. Propose the change in a PR with a description of the principle being amended and the rationale.
2. Update `CONSTITUTION_VERSION` following semantic versioning:
   - MAJOR — principle removal or redefinition that breaks existing practices.
   - MINOR — new principle or material expansion of an existing one.
   - PATCH — wording clarification, typo fix, non-semantic refinement.
3. Update `LAST_AMENDED_DATE` to the date of ratification.
4. Run the consistency propagation checklist: verify plan-template, spec-template, tasks-template,
   and any command files reference the amended principle correctly.
5. Update `CLAUDE.md` if the amendment changes day-to-day development guidance.

**Compliance**: All implementation plans (`plan.md`) MUST include a Constitution Check section
that explicitly gates the plan against each principle before Phase 0 research begins.

**Runtime guidance**: `CLAUDE.md` at the repository root is the authoritative reference for
commands, architecture notes, and day-to-day conventions. The constitution governs the
_non-negotiable rules_; CLAUDE.md governs the _how_.

**Version**: 1.0.0 | **Ratified**: 2026-03-14 | **Last Amended**: 2026-03-14
