# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Khaleel Karim's personal portfolio site — Next.js 16 App Router + React 19 + TypeScript + Tailwind + shadcn/ui. Originally built on the [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) template; the template author's content and unused features have been stripped out.

Owner context: Data Science major at UCSD, near graduation. Has projects and work experience; no open-source contributions and no blog posts — those template sections were removed and should not be reintroduced.

**The owner is new to web development.** Prefer changes confined to `config/`. When a change does require touching `app/` or `components/`, explain what the file does rather than assuming familiarity.

## Commands

```bash
npm run dev      # next dev (localhost:3000)
npm run build    # next build — run this before declaring a change done
npm run lint     # eslint (flat config, eslint.config.mjs)
npx prettier --write .   # .prettierrc: 2-space, double quotes, 80 cols, organize-imports plugin
```

There is no test suite. `npm run build` + loading the page is the verification loop.

## Core architecture: content lives in `config/`, not in components

This is the single most important thing about the codebase. Pages are thin renderers; all site content is typed data in `config/*.ts`:

| File                   | Holds                                                                    |
| ---------------------- | ------------------------------------------------------------------------ |
| `config/site.ts`       | Name, tagline, URL, social links, OG image, SEO keywords                 |
| `config/pages.ts`      | Per-page title/description + per-page `metadata` for SEO                 |
| `config/routes.ts`     | `mainNav` array — drives desktop + mobile nav                            |
| `config/projects.ts`   | `Projects[]` + `featuredProjects` (homepage)                             |
| `config/experience.ts` | `experiences[]` — timeline + detail pages                                |
| `config/skills.ts`     | `skillsUnsorted` → `skills` (sorted by rating) → `featuredSkills`         |
| `config/socials.ts`    | Footer icons + the contact page's social row                             |
| `config/constants.ts`  | Union types: `ValidSkills`, `ValidCategory`, `ValidExpType`, `ValidPages` |

To change what the site says, edit `config/`. Only touch `app/` or `components/` when changing layout or behavior.

### Type constraints that bite

- `ValidSkills` in `config/constants.ts` is a string union covering the Data Science stack (Python, Pandas, PyTorch, Spark, …). Using a skill string anywhere (`techStack`, `skills`) requires adding it to that union first, or the build fails. Adding a skill is a three-step edit: `ValidSkills` → an icon in `components/common/icons.tsx` → the entry in `config/skills.ts`.
- `ValidPages` must stay in sync with the keys of `pagesConfig` — `PagesConfig` is a mapped type over it, so adding/removing a page means editing both.
- "Featured" is just `slice()` — `featuredProjects = Projects.slice(0, 3)`, `featuredSkills = skills.slice(0, 6)`. Homepage ordering = array ordering.

## Routing

- `app/(root)/` — route group holding all public pages; its `layout.tsx` supplies nav, theme toggle, and footer.
- `app/layout.tsx` — root layout: fonts (Inter + local CalSans), `ThemeProvider`, site-wide metadata, Google Analytics.
- Live pages: `/`, `/projects`, `/experience`, `/skills`, `/contact`, `/resume`.
- Dynamic detail pages: `projects/[projectId]`, `experience/[expId]` — the id matches the `id` field in the corresponding config array.
- `resume/page.tsx` is a client-side redirect to `NEXT_PUBLIC_RESUME_LINK`; falls back to `/` when unset.
- There are no API routes. The contact page is a static `mailto:` card reading the address out of `config/socials.ts`.

## Theming

Seven themes: `light`, `dark`, `retro`, `cyberpunk`, `paper`, `aurora`, `synthwave`, via `next-themes` with `attribute="class"`. Each is a CSS-variable block in `app/globals.css`; colors resolve through `hsl(var(--x))` in `tailwind.config.js`. Theme class names are in the Tailwind `safelist` — a new theme must be added in **four** places: globals.css variables, the `themes` array in `app/layout.tsx`, the safelist, and `components/common/mode-toggle.tsx`.

## Env vars

`.env` is gitignored; `.env.copy` is the committed template. Nothing here is secret.

- `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` — **required**; `app/layout.tsx` throws at render if missing. Currently a placeholder.
- `NEXT_PUBLIC_RESUME_LINK` — target of the `/resume` redirect. Currently empty.
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` — optional Search Console token.

## Conventions

- Server Components by default; `"use client"` only where hooks/animation demand it (modals, nav, anything under `components/common/animated-*`).
- Imports use the `@/` alias (tsconfig paths). Prettier's organize-imports plugin controls import order — don't hand-sort.
- shadcn/ui primitives live in `components/ui/`; feature components are grouped by domain (`components/projects/`, `components/experience/`, …). Follow that grouping for new components.
- Animation is Framer Motion, wrapped in `AnimatedSection` / `AnimatedText` / `ClientPageWrapper`. Reuse those rather than importing `motion` directly.
- Images go in `public/<section>/<slug>/`. Prefer `.webp`.

## Content status

Real content is in place, sourced from the owner's resume (4 roles: AVEVA, UCSD research, AIBRT, Dieform; 2 projects: song-lyric NLP, recipe data analysis). Remaining `TODO:` markers:

- **Images** — every project uses `/logo.png` as a stand-in for `companyLogoImg` and `pagesInfoArr`. Real screenshots go in `public/projects/<id>/`. No experience logos exist; `logo` is optional and conditionally rendered, so omitting it is safe.
- `public/profile-img.jpg` and `public/logo.png` are still template assets and appear on the homepage and every project detail page.
- `config/skills.ts` ratings are inferred from how central each tool was on the resume, not stated by the owner.
- `config/site.ts`: `url` (no domain deployed yet), `ogImage`, `iconIco`, `logoIcon` still placeholders.
- `config/experience.ts`: the AIBRT `companyUrl` is unverified.
- `.env`: `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` is still `G-XXXXXXXXXX`. `NEXT_PUBLIC_RESUME_LINK` is set and the Drive file is public.

Facts worth not re-deriving: B.S. Data Science at UCSD, June 2024 – March 2027, GPA 3.9. The AVEVA internship (June–Sept 2026) is stored with its literal end date rather than `"Present"`, matching the resume.

## Gotchas

- `LICENSE` is the template's MIT license naming Naman Barkiya. **Keep it and its copyright line intact** — that's the license's attribution requirement. The README carries a matching credit. This is the one place the original author's name legitimately remains.
- Removing a page means updating: the route directory, `routesConfig.mainNav`, `pagesConfig` + `ValidPages`, `app/sitemap.ts`, and the corresponding homepage section in `app/(root)/page.tsx`.
- `public/robots.txt` hardcodes the sitemap URL — it must be updated by hand if the domain changes (it does not read `siteConfig`).
