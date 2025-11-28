export async function getServerSideProps({ res }: any) {
  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /.next
Sitemap: http://localhost:3000/sitemap.xml`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();
  return {
    props: {},
  };
}

const Robots = () => null;
export default Robots;
