# Test Report — Edge Cases

1. No image
- Behavior: Cards show placeholder SVG (`/images/no-image.svg`). Article page uses fallback image.
- Test: Article id 10 has empty `image` field; rendering shows placeholder.

2. No articles
- Behavior: Home page renders "No news available" message when `articles` array is empty.
- Test: If `data/articles.json` is emptied, the home page shows fallback UI.

3. Long titles
- Behavior: Card uses CSS to limit summary lines; full title displays on article page without truncation.
- Test: Long titles will wrap; can add `line-clamp` if desired.

4. Data fetch failure
- Behavior: `getStaticProps` reads local file; if read fails, Next will show build error. For production, wrap read in try/catch and return fallback props.

5. Loading states
- Behavior: Static pages are served; `Loading` component is included for client-side fetch scenarios.

Notes: Run the app locally and navigate to `/` and `/articles/1` to manually verify scenarios.
