import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 100, height: 100 }}>
            <div style={{ ...getCardImageStyle("/images/privacy.svg"), width: "100%", height: "100%", borderRadius: 12 }} />
          </div>
          <div>
            <h1 style={{ margin: "0 0 8px 0" }}>Privacy Policy</h1>
            <p className="muted">Your data protection matters to us</p>
          </div>
        </div>

        <article style={{ maxWidth: 800, lineHeight: 1.8 }}>
          <h2>Data Collection</h2>
          <p className="muted">
            We collect information you provide directly to us, such as when you subscribe to our newsletter or contact us.
          </p>

          <h2>How We Use Your Data</h2>
          <p className="muted">
            We use the information we collect to deliver, maintain, and improve our services, and to send you updates about news and events.
          </p>

          <h2>Data Security</h2>
          <p className="muted">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access.
          </p>

          <h2>Your Rights</h2>
          <p className="muted">
            You have the right to access, correct, or delete your personal information. Contact us at contact@livehindustan.local for any requests.
          </p>

          <h2>Changes to This Policy</h2>
          <p className="muted">
            We may update this privacy policy from time to time. We will notify you of any significant changes by email or through prominent notice on our website.
          </p>

          <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
          <p><Link href="/">← Back home</Link></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
