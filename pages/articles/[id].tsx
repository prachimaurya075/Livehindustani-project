import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Article = {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  publishedAt: string;
  image?: string;
  category: string;
};

type Props = { article?: Article; error?: string };

export default function ArticlePage({ article, error }: Props) {
  if (error) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ padding: "24px 0", minHeight: "50vh" }}>
          <h1>Error loading article</h1>
          <p style={{ color: "var(--muted)" }}>{error}</p>
          <p><Link href="/">← Back home</Link></p>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="container" style={{ padding: "24px 0", minHeight: "50vh" }}>
          <h1>Article not found</h1>
          <p><Link href="/">← Back home</Link></p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "24px 0" }}>
        <article>
          <header style={{ marginBottom: "24px" }}>
            <span style={{ color: "var(--accent)", fontSize: "13px" }}>{article.category}</span>
            <h1 style={{ marginTop: "8px" }}>{article.title}</h1>
            <p style={{ color: "var(--muted)", fontSize: "13px" }}>
              By <strong>{article.author}</strong> • {format(new Date(article.publishedAt), "MMM d, yyyy")}
            </p>
          </header>
          {article.image && (
            <div style={{ borderRadius: "8px", overflow: "hidden", marginBottom: "24px", height: "300px", backgroundImage: `url(${article.image})`, backgroundSize: "cover" }} />
          )}
          <div style={{ lineHeight: 1.8, fontSize: "16px" }}>
            {article.content || article.summary}
          </div>
        </article>
        <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
        <p><Link href="/">← Back home</Link></p>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const articles = JSON.parse(rawData);
    const paths = articles.map((a: any) => ({
      params: { id: String(a.id) },
    }));
    return { paths, fallback: "blocking" };
  } catch (e) {
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params ?? {};
  try {
    if (!id) return { notFound: true, revalidate: 10 };

    const fs = await import("fs");
    const path = await import("path");
    const dataPath = path.join(process.cwd(), "data", "articles.json");
    const rawData = fs.readFileSync(dataPath, "utf8");
    const articles = JSON.parse(rawData);
    const article = articles.find((a: any) => String(a.id) === String(id));

    if (!article) return { notFound: true, revalidate: 10 };
    return { props: { article }, revalidate: 60 };
  } catch (e: any) {
    return { props: { error: e?.message ?? "Unknown error" }, revalidate: 10 };
  }
};
