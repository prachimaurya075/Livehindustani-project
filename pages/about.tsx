import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ width: 120, height: 120 }}>
              <div style={{ ...getCardImageStyle("/images/logo.svg"), width: "100%", height: "100%", borderRadius: 12 }} />
            </div>
            <div>
              <h1 style={{ margin: 0 }}>About LiveHindustan</h1>
              <p className="muted" style={{ marginTop: 8 }}>
                Your trusted source for reliable local and national news
              </p>
            </div>
          </div>

          <article style={{ lineHeight: 1.8 }}>
            <h2>Our Mission</h2>
            <p className="muted">
              LiveHindustan is committed to delivering accurate, timely, and comprehensive news coverage to audiences across the country. We believe in responsible journalism and transparent reporting that informs and empowers our readers.
            </p>

            <h2>What We Cover</h2>
            <p className="muted">
              From breaking news in your city to national developments, from business markets to sports highlights, and from entertainment updates to cultural events — we bring you a diverse range of stories that matter.
            </p>

            <h2>Our Values</h2>
            <ul style={{ marginLeft: 20 }} className="muted">
              <li><strong>Accuracy:</strong> We fact-check and verify all information before publishing</li>
              <li><strong>Transparency:</strong> We clearly distinguish news from opinion</li>
              <li><strong>Timeliness:</strong> We update our stories hourly to keep you informed</li>
              <li><strong>Accessibility:</strong> We make news available to everyone</li>
            </ul>

            <h2>Contact Us</h2>
            <p className="muted">
              Have a news tip? Want to advertise? Reach out to us at{" "}
              <a href="mailto:contact@livehindustan.local" style={{ color: "var(--accent)" }}>
                contact@livehindustan.local
              </a>
            </p>

            <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
            <p><Link href="/">← Back home</Link></p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
