import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

type SearchResult = {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    if (!query.trim()) {
      setResults([]);
      return;
    }
    // Demo search - in production, call an API
    const allArticles: SearchResult[] = [
      {
        id: "1",
        title: "City celebrates annual arts festival with a record turnout",
        summary: "Thousands attended the city's annual arts festival...",
        image: "/images/festival-celebration.svg",
        category: "Local",
        author: "Priya Sharma",
        publishedAt: "2025-11-20T10:30:00Z",
      },
      {
        id: "2",
        title: "Economic update: Markets show cautious optimism",
        summary: "Markets reacted positively to new economic data...",
        image: "/images/market.svg",
        category: "Business",
        author: "Arjun Rao",
        publishedAt: "2025-11-21T08:00:00Z",
      },
      {
        id: "3",
        title: "New metro line to improve daily commutes",
        summary: "The transport department unveiled plans for a new metro line...",
        image: "/images/metro.svg",
        category: "City",
        author: "Neha Verma",
        publishedAt: "2025-11-22T12:15:00Z",
      },
    ];

    const filtered = allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.summary.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ marginBottom: 24 }}>Search Articles</h1>

        <form onSubmit={handleSearch} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <input
              className="search-input"
              type="text"
              placeholder="Search by title, category, or keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ flex: 1, minWidth: 200 }}
              aria-label="Search articles"
            />
            <button
              type="submit"
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                padding: "8px 24px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Search
            </button>
          </div>
        </form>

        {searched && (
          <div>
            <p className="muted" style={{ marginBottom: 24 }}>
              {results.length > 0
                ? `Found ${results.length} result${results.length !== 1 ? "s" : ""}`
                : "No articles found matching your search."}
            </p>

            {results.length > 0 && (
              <div className="grid">
                {results.map((article) => (
                  <Link
                    key={article.id}
                    href={`/articles/${article.id}`}
                    className="card"
                  >
                    <div
                      className="card-image"
                      style={getCardImageStyle(article.image)}
                    />
                    <h3>{article.title}</h3>
                    <p className="muted">{article.summary}</p>
                    <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>
                      {article.category} • {format(new Date(article.publishedAt), "MMM d, yyyy")}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        <hr style={{ margin: "40px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
        <p><Link href="/">← Back home</Link></p>
      </main>
      <Footer />
    </>
  );
}
