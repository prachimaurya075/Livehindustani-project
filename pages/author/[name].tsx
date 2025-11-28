import Link from "next/link";
import { format } from "date-fns";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCardImageStyle } from "../../utils/imageHelper";

const AUTHOR_PROFILES: Record<string, any> = {
  "priya-sharma": {
    name: "Priya Sharma",
    bio: "Senior correspondent covering arts, culture, and local events with a passion for storytelling.",
    image: "/images/topic-local.svg",
    articles: [
      {
        id: "1",
        title: "City celebrates annual arts festival with a record turnout",
        summary: "Thousands attended the city's annual arts festival...",
        image: "/images/festival-celebration.svg",
        publishedAt: "2025-11-20T10:30:00Z",
      },
    ],
  },
  "arjun-rao": {
    name: "Arjun Rao",
    bio: "Business journalist with expertise in markets, startups, and economic policy.",
    image: "/images/category-business.svg",
    articles: [
      {
        id: "2",
        title: "Economic update: Markets show cautious optimism",
        summary: "Markets reacted positively to new economic data...",
        image: "/images/market.svg",
        publishedAt: "2025-11-21T08:00:00Z",
      },
    ],
  },
  "neha-verma": {
    name: "Neha Verma",
    bio: "Urban development and infrastructure correspondent reporting on city projects.",
    image: "/images/metro.svg",
    articles: [
      {
        id: "3",
        title: "New metro line to improve daily commutes",
        summary: "The transport department unveiled plans for a new metro line...",
        image: "/images/metro.svg",
        publishedAt: "2025-11-22T12:15:00Z",
      },
    ],
  },
};

export default function AuthorPage({ name }: { name: string }) {
  const author = AUTHOR_PROFILES[name] || AUTHOR_PROFILES["priya-sharma"];

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              ...getCardImageStyle(author.image),
              width: 100,
              height: 100,
              borderRadius: 12,
            }}
          />
          <div>
            <h1 style={{ margin: 0 }}>{author.name}</h1>
            <p className="muted" style={{ marginTop: 8 }}>
              {author.bio}
            </p>
            <p style={{ marginTop: 8, fontSize: 14, color: "var(--accent)" }}>
              {author.articles.length} article{author.articles.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <h2 style={{ marginBottom: 24 }}>Articles by {author.name}</h2>
        <div className="grid">
          {author.articles.map((article: any) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="card">
              <div
                className="card-image"
                style={getCardImageStyle(article.image)}
              />
              <h3>{article.title}</h3>
              <p className="muted">{article.summary}</p>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 8 }}>
                {format(new Date(article.publishedAt), "MMM d, yyyy")}
              </div>
            </Link>
          ))}
        </div>

        <hr style={{ margin: "40px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
        <p><Link href="/">← Back home</Link></p>
      </main>
      <Footer />
    </>
  );
}

export function getStaticProps({ params }: { params: { name: string } }) {
  const author = AUTHOR_PROFILES[params.name];
  if (!author) {
    return { notFound: true };
  }
  return { props: { name: params.name }, revalidate: 60 };
}

export function getStaticPaths() {
  return {
    paths: Object.keys(AUTHOR_PROFILES).map((name) => ({
      params: { name },
    })),
    fallback: "blocking",
  };
}
