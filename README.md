# Khaleel Karim — Portfolio

Personal portfolio site. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui.

## Running it locally

```bash
npm install
cp .env.copy .env   # then fill in the values
npm run dev         # http://localhost:3000
```

Other commands:

```bash
npm run build            # production build — run before deploying
npm run lint             # eslint
npx prettier --write .   # format everything
```

## Editing the content

All the content lives in `config/` as plain lists. You almost never need to touch
`app/` or `components/` to change what the site says.

| What you want to change | File |
| --- | --- |
| Name, headline, bio, SEO keywords | `config/site.ts` |
| Footer / contact social links | `config/socials.ts` |
| Page headings and descriptions | `config/pages.ts` |
| Work experience | `config/experience.ts` |
| Projects | `config/projects.ts` |
| Skills and star ratings | `config/skills.ts` |
| Nav bar links | `config/routes.ts` |

Two things to know:

- **Adding a new skill takes three edits**, in order: add the name to `ValidSkills`
  in `config/constants.ts`, add an icon in `components/common/icons.tsx`, then add
  the entry in `config/skills.ts`. Skip step one and the build fails on purpose —
  it's a typo guard.
- **The homepage shows the first 3 projects and top 6 skills.** Order in the array
  is what promotes something, so lead with your strongest work.

Images go in `public/projects/<project-id>/`. Prefer `.webp`.

## Credits

Built on the [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)
template by [Naman Barkiya](https://github.com/namanbarkiya), used under the MIT
License (see `LICENSE`).
