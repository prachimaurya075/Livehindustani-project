import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Article = {
  id: string;
  title: string;
  summary: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
};

type Props = {
  category: string;
  articles: Article[];
};

export default function CategoryPage({ category, articles }: Props) {
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "24px 0" }}>
          <div className="container">
            <h1 style={{ fontSize: 32, margin: 0 }}>{categoryTitle}</h1>
            <p className="muted" style={{ marginTop: 8 }}>
              Latest updates from the {categoryTitle.toLowerCase()} section
            </p>
          </div>
        </section>

        <section className="container grid-section">
          <div className="grid">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="card"
                >
                  {article.image && (
                    <div
                      className="card-image"
                      style={{
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}
                  <h3>{article.title}</h3>
                  <p className="muted">{article.summary}</p>
                  <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>
                    By {article.author} • {format(new Date(article.publishedAt), "MMM d, yyyy")}
                  </div>
                </Link>
              ))
            ) : (
              <p className="muted">No articles found in this category.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["india", "world", "business", "sports", "entertainment"];
  const paths = categories.map((cat) => ({
    params: { category: cat },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { category } = ctx.params ?? {};
  try {
    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "category-articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const allCategories = JSON.parse(rawData);
    const articles = allCategories[String(category).toLowerCase()] || [];
    return {
      props: { category: String(category).toLowerCase(), articles },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: { category: String(category).toLowerCase(), articles: [] },
      revalidate: 10,
    };
  }
};
