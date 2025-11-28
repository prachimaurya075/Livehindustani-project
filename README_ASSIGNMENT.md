# LiveHindustan Clone (Next.js) — Assignment

Simplified front-page clone built with Next.js using mock JSON data and Tailwind-friendly classes.

## Quick start

Install dependencies:

```powershell
npm install
```

Run dev server:

```powershell
npm run dev
```

Open `http://localhost:3000`.

## Notes

- Data is mocked in `data/articles.json`.
- Home page uses ISR (`getStaticProps` + `revalidate: 60`).
- Article pages use `getStaticPaths` + `fallback: 'blocking'`.
- Images are in `public/images` (SVG placeholders).

## Files to review

- `components/*` — UI components (Hero, Card, ArticleList, Nav, Footer, Layout)
- `pages/index.js` — Home page
- `pages/articles/[id].js` — Dynamic article page
- `data/articles.json` — mock data
- `design-document.md` — design decisions

## Build for production

```powershell
npm run build; npm start
```

---

If you want, I can add Tailwind config and wire up the Tailwind setup next. Let me know.
