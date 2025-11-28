import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { format } from "date-fns";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCardImageStyle } from "../../utils/imageHelper";

type Article = {
  id: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  category: string;
  subcategory: string;
  publishedAt: string;
  views: string;
  likes: string;
  [key: string]: any;
};

type Props = {
  subcategory: string;
  articles: Article[];
};

export default function BusinessSubcategoryPage({ subcategory, articles }: Props) {
  const displayName = {
    startups: "Startups",
    markets: "Markets",
    mergers: "Mergers & Acquisitions",
    economy: "Economy",
  }[subcategory] || subcategory;

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "24px 0" }}>
          <div className="container hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">{displayName}</h1>
              <p className="hero-sub">Latest news and updates from {displayName.toLowerCase()}</p>
            </div>
            <div className="hero-right">
              <div className="hero-card">📰 {articles.length} Articles</div>
            </div>
          </div>
        </section>

        <section className="container grid-section">
          <div className="grid">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="card">
                <div className="card-image" style={getCardImageStyle(article.image)} />
                <h3>{article.title}</h3>
                <p className="muted">{article.summary}</p>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 8 }}>
                  {article.author} • {format(new Date(article.publishedAt), "MMM d")}
                </div>
                <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 6 }}>
                  👁 {article.views} • 👍 {article.likes}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <hr style={{ margin: "40px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
        <div className="container" style={{ padding: "20px 0", textAlign: "center" }}>
          <p><Link href="/business">← Back to Business</Link></p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const subcategories = ["startups", "markets", "mergers", "economy"];
  const paths = subcategories.map((sub) => ({
    params: { subcategory: sub },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { subcategory } = ctx.params ?? {};
  try {
    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "business-articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const allBusiness = JSON.parse(rawData);
    const articles = allBusiness[String(subcategory).toLowerCase()] || [];
    return {
      props: { subcategory: String(subcategory).toLowerCase(), articles },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { subcategory: String(subcategory).toLowerCase(), articles: [] },
      revalidate: 10,
    };
  }
};
