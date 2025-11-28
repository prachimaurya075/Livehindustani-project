import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCardImageStyle } from "../../utils/imageHelper";

const BUSINESS_CATEGORIES = [
  {
    id: "startups",
    name: "Startups",
    icon: "/images/startup-hub.svg",
    description: "Funding rounds, new ventures, tech innovation",
    articles: 4,
  },
  {
    id: "markets",
    name: "Markets",
    icon: "/images/market.svg",
    description: "Stock market, forex, commodities, investments",
    articles: 3,
  },
  {
    id: "mergers",
    name: "M&A",
    icon: "/images/market.svg",
    description: "Mergers, acquisitions, corporate deals",
    articles: 3,
  },
  {
    id: "economy",
    name: "Economy",
    icon: "/images/market.svg",
    description: "GDP, inflation, policy, economic trends",
    articles: 3,
  },
];

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "24px 0" }}>
          <div className="container hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">Business</h1>
              <p className="hero-sub">Markets, startups, mergers, and economic news</p>
            </div>
            <div className="hero-right">
              <div className="hero-card">💼 Latest Updates</div>
            </div>
          </div>
        </section>

        <section className="container grid-section">
          <h2>Browse by Category</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {BUSINESS_CATEGORIES.map((category) => (
              <Link key={category.id} href={`/business/${category.id}`} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    ...getCardImageStyle(category.icon),
                    height: 120,
                    marginBottom: 16,
                    borderRadius: 8,
                  }}
                />
                <h3 style={{ marginBottom: 8 }}>{category.name}</h3>
                <p className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
                  {category.description}
                </p>
                <div style={{ fontSize: 12, color: "var(--accent)" }}>
                  {category.articles} articles
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container grid-section">
          <h2>Featured Stories</h2>
          <div className="grid">
            <Link href="/business/startups" className="card">
              <div className="card-image" style={getCardImageStyle("/images/startup-hub.svg")} />
              <h3>Fintech startup secures $25M Series A</h3>
              <p className="muted">Innovative payment solutions company raises major funding round.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>Startups • Nov 21</div>
            </Link>
            <Link href="/business/mergers" className="card">
              <div className="card-image" style={getCardImageStyle("/images/market.svg")} />
              <h3>Retail giants announce $25B merger</h3>
              <p className="muted">Two major chains merge to create India's largest retailer.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>M&A • Nov 20</div>
            </Link>
            <Link href="/business/economy" className="card">
              <div className="card-image" style={getCardImageStyle("/images/market.svg")} />
              <h3>GDP growth accelerates to 7.2%</h3>
              <p className="muted">Robust economic growth driven by consumer spending.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>Economy • Nov 22</div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
