import Link from "next/link";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

const TRENDING_ARTICLES = [
  {
    id: "1",
    title: "City celebrates annual arts festival with a record turnout",
    summary: "Thousands attended the city's annual arts festival...",
    image: "/images/festival-celebration.svg",
    category: "Local",
    author: "Priya Sharma",
    publishedAt: "2025-11-20T10:30:00Z",
    views: "125.4K",
    trend: "↑ 45%",
  },
  {
    id: "8",
    title: "Tech: Local startup secures Series A funding",
    summary: "A fintech startup announced a successful Series A round...",
    image: "/images/startup-hub.svg",
    category: "Technology",
    author: "Ritu Patel",
    publishedAt: "2025-11-15T11:20:00Z",
    views: "98.2K",
    trend: "↑ 32%",
  },
  {
    id: "3",
    title: "New metro line to improve daily commutes",
    summary: "The transport department unveiled plans for a new metro line...",
    image: "/images/metro.svg",
    category: "City",
    author: "Neha Verma",
    publishedAt: "2025-11-22T12:15:00Z",
    views: "87.6K",
    trend: "↑ 28%",
  },
];

export default function TrendingPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ margin: "0 0 12px 0" }}>Trending Now</h1>
          <p className="muted">Most popular stories this week</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {TRENDING_ARTICLES.map((article, index) => (
            <Link key={article.id} href={`/articles/${article.id}`} style={{ textDecoration: "none" }}>
              <div
                className="card"
                style={{
                  display: "flex",
                  gap: 16,
                  padding: 16,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    ...getCardImageStyle(article.image),
                    width: 120,
                    height: 120,
                    borderRadius: 8,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)" }}>
                      #{index + 1} TRENDING
                    </span>
                    <span style={{ fontSize: 12, color: "var(--muted)" }}>
                      {article.trend}
                    </span>
                  </div>
                  <h3 style={{ margin: "0 0 8px 0", fontSize: 18 }}>{article.title}</h3>
                  <p className="muted" style={{ marginBottom: 12, fontSize: 14 }}>
                    {article.summary}
                  </p>
                  <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--muted)" }}>
                    <span>{article.category}</span>
                    <span>By {article.author}</span>
                    <span>{format(new Date(article.publishedAt), "MMM d, yyyy")}</span>
                    <span>👁 {article.views}</span>
                  </div>
                </div>
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
