function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>http://localhost:3000</loc>
      </url>
      <url>
        <loc>http://localhost:3000/india</loc>
      </url>
      <url>
        <loc>http://localhost:3000/world</loc>
      </url>
      <url>
        <loc>http://localhost:3000/business</loc>
      </url>
      <url>
        <loc>http://localhost:3000/sports</loc>
      </url>
      <url>
        <loc>http://localhost:3000/entertainment</loc>
      </url>
      <url>
        <loc>http://localhost:3000/categories</loc>
      </url>
      <url>
        <loc>http://localhost:3000/trending</loc>
      </url>
      <url>
        <loc>http://localhost:3000/search</loc>
      </url>
      <url>
        <loc>http://localhost:3000/about</loc>
      </url>
      <url>
        <loc>http://localhost:3000/privacy</loc>
      </url>
      <url>
        <loc>http://localhost:3000/terms</loc>
      </url>
    </urlset>`;
}

export async function getServerSideProps({ res }: any) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

const Sitemap = () => null;
export default Sitemap;
