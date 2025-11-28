import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IMAGE_DIMENSIONS, getCardImageStyle } from "../utils/imageHelper";

type Article = {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  publishedAt: string;
};

type Props = {
  articles: Article[];
};

export default function Home({ articles }: Props) {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">ताज़ा खबरें, तेज़ और भरोसेमंद</h1>
              <p className="hero-sub">लोकल से नेशनल तक — हर खबर आपकी पहुँच में।</p>
            </div>
            <div className="hero-right">
              <div className="hero-card">📰 Featured Story</div>
            </div>
          </div>
        </section>

        <section className="container grid-section">
          <h2>Latest Headlines</h2>
          <div className="grid">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="card">
                {article.image && (
                  <div className="card-image" style={getCardImageStyle(article.image)} />
                )}
                <h3>{article.title}</h3>
                <p className="muted">{article.summary}</p>
                <span style={{ fontSize: "12px", color: "var(--accent)" }}>{article.category}</span>
                <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: 8 }}>
                  {format(new Date(article.publishedAt), "MMM d, yyyy")}
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

export async function getStaticProps() {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const articles = JSON.parse(rawData);
    return {
      props: { articles },
      revalidate: 60,
    };
  } catch (e) {
    return { props: { articles: [] }, revalidate: 10 };
  }
}
