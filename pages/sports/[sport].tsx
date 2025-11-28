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
};

type Props = {
  sport: string;
  articles: Article[];
};

export default function SportPage({ sport, articles }: Props) {
  const sportTitle = sport.charAt(0).toUpperCase() + sport.slice(1);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "24px 0" }}>
          <div className="container hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">{sportTitle}</h1>
              <p className="hero-sub">All latest {sportTitle.toLowerCase()} news, results, and updates</p>
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
                  {article.subcategory} • {format(new Date(article.publishedAt), "MMM d")}
                </div>
                <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 6 }}>
                  👁 {article.views} • 👍 {article.likes}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const sports = ["cricket", "football", "tennis", "badminton", "hockey"];
  const paths = sports.map((s) => ({
    params: { sport: s },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { sport } = ctx.params ?? {};
  try {
    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "sports-articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const allSports = JSON.parse(rawData);
    const articles = allSports[String(sport).toLowerCase()] || [];
    return {
      props: { sport: String(sport).toLowerCase(), articles },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { sport: String(sport).toLowerCase(), articles: [] },
      revalidate: 10,
    };
  }
};
