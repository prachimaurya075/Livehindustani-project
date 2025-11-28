# Design Document

## Wireframes
- Desktop: Hero spanning two columns on the left, top-stories sidebar on right, followed by a 3-column article grid.
- Mobile: Single column; hero stacked above list.

## Layout decisions
- Use a large `Hero` for the top story to emphasize breaking/top news.
- `ArticleList` shows cards in responsive grid: 1 column mobile, 2 on small, 3 on large screens.

## Data model
Article object fields:
- id, title, summary, content, image, publishedAt, author, category

## Data fetching
- Home page: `getStaticProps` with `revalidate: 60` (ISR) for fast static serving and periodic updates.
- Article pages: `getStaticPaths` + `getStaticProps` with `fallback: 'blocking'` to pre-render top stories and generate others on demand.

## Components
- `Nav` — header and nav links.
- `Hero` — large top story.
- `Card` — reusable article preview.
- `ArticleList` — grid of `Card`s.
- `Layout` — wrapper with `Nav` and `Footer`.
- `Loading` / `Error` — simple status UIs.

## Tradeoffs
- ISR chosen for speed & SEO; small staleness tolerance (60s). Using mock JSON simplifies offline demo.

## Future improvements
- Add pagination, search, category filters.
- Integrate real news API and image CDN.
- Improve accessibility and tests.
