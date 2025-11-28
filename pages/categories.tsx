import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

const CATEGORIES = [
  {
    id: "india",
    name: "India",
    description: "Latest news from across India",
    icon: "/images/category-india.svg",
    count: 3,
  },
  {
    id: "world",
    name: "World",
    description: "International news and updates",
    icon: "/images/category-world.svg",
    count: 3,
  },
  {
    id: "business",
    name: "Business",
    description: "Business, economy and markets",
    icon: "/images/category-business.svg",
    count: 3,
  },
  {
    id: "sports",
    name: "Sports",
    description: "Sports news and updates",
    icon: "/images/category-sports.svg",
    count: 3,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Entertainment and celebrity news",
    icon: "/images/category-entertainment.svg",
    count: 3,
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ marginBottom: 12 }}>All Categories</h1>
        <p className="muted" style={{ marginBottom: 32 }}>
          Browse news by category. Each section is updated hourly with the latest stories.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className="card"
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  ...getCardImageStyle(category.icon),
                  height: 140,
                  marginBottom: 16,
                  borderRadius: 8,
                }}
              />
              <h3 style={{ marginBottom: 8 }}>{category.name}</h3>
              <p className="muted" style={{ marginBottom: 12 }}>
                {category.description}
              </p>
              <div style={{ fontSize: 12, color: "var(--accent)" }}>
                {category.count} articles
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
