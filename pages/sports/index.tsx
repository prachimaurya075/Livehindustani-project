import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCardImageStyle } from "../../utils/imageHelper";

const SPORTS_CATEGORIES = [
  {
    id: "cricket",
    name: "Cricket",
    icon: "/images/category-sports.svg",
    description: "International matches, IPL, domestic tournaments",
    articles: 3,
  },
  {
    id: "football",
    name: "Football",
    icon: "/images/category-sports.svg",
    description: "National team, ISL, international leagues",
    articles: 3,
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: "/images/category-sports.svg",
    description: "Grand Slams, ATP, WTA tournaments",
    articles: 3,
  },
  {
    id: "badminton",
    name: "Badminton",
    icon: "/images/category-sports.svg",
    description: "International championships, national tournaments",
    articles: 2,
  },
  {
    id: "hockey",
    name: "Hockey",
    icon: "/images/category-sports.svg",
    description: "Men's and women's national teams, World Cup",
    articles: 2,
  },
];

export default function SportsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" style={{ padding: "24px 0" }}>
          <div className="container hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">Sports</h1>
              <p className="hero-sub">Latest updates from Cricket, Football, Tennis, Badminton, Hockey and more</p>
            </div>
            <div className="hero-right">
              <div className="hero-card">🏆 Live Scores & Updates</div>
            </div>
          </div>
        </section>

        <section className="container grid-section">
          <h2>Browse by Sport</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {SPORTS_CATEGORIES.map((sport) => (
              <Link key={sport.id} href={`/sports/${sport.id}`} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    ...getCardImageStyle(sport.icon),
                    height: 120,
                    marginBottom: 16,
                    borderRadius: 8,
                  }}
                />
                <h3 style={{ marginBottom: 8 }}>{sport.name}</h3>
                <p className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
                  {sport.description}
                </p>
                <div style={{ fontSize: 12, color: "var(--accent)" }}>
                  {sport.articles} articles
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="container grid-section">
          <h2>Featured Stories</h2>
          <div className="grid">
            <Link href="/sports/cricket" className="card">
              <div className="card-image" style={getCardImageStyle("/images/category-sports.svg")} />
              <h3>India qualifies for World Cup finals</h3>
              <p className="muted">Team India secures historic spot after defeating Pakistan in semi-final.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>Cricket • Nov 22</div>
            </Link>
            <Link href="/sports/football" className="card">
              <div className="card-image" style={getCardImageStyle("/images/category-sports.svg")} />
              <h3>New stadium opens with record attendance</h3>
              <p className="muted">State-of-the-art facility inaugurated with 80,000 fans present.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>Football • Nov 21</div>
            </Link>
            <Link href="/sports/hockey" className="card">
              <div className="card-image" style={getCardImageStyle("/images/category-sports.svg")} />
              <h3>Men's hockey team defeats Australia</h3>
              <p className="muted">Historic victory sets up challenging semi-final encounter.</p>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 8 }}>Hockey • Nov 22</div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
