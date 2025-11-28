import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "40px 20px" }}>
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 100, height: 100 }}>
            <div style={{ ...getCardImageStyle("/images/terms.svg"), width: "100%", height: "100%", borderRadius: 12 }} />
          </div>
          <div>
            <h1 style={{ margin: "0 0 8px 0" }}>Terms of Service</h1>
            <p className="muted">Please read these terms carefully</p>
          </div>
        </div>

        <article style={{ maxWidth: 800, lineHeight: 1.8 }}>
          <h2>Acceptance of Terms</h2>
          <p className="muted">
            By accessing and using LiveHindustan, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>Use License</h2>
          <p className="muted">
            Permission is granted to temporarily download one copy of the materials (information or software) on LiveHindustan for personal, non-commercial transitory viewing only.
          </p>

          <h2>Disclaimer</h2>
          <p className="muted">
            The materials on LiveHindustan are provided on an 'as is' basis. LiveHindustan makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>Limitations</h2>
          <p className="muted">
            In no event shall LiveHindustan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LiveHindustan.
          </p>

          <h2>Accuracy of Materials</h2>
          <p className="muted">
            The materials appearing on LiveHindustan could include technical, typographical, or photographic errors. LiveHindustan does not warrant that any of the materials on this site are accurate, complete, or current.
          </p>

          <h2>Contact Us</h2>
          <p className="muted">
            If you have any questions about these Terms and Conditions, please contact us at contact@livehindustan.local
          </p>

          <hr style={{ margin: "32px 0", border: "none", borderTop: "1px solid rgba(255,255,255,0.03)" }} />
          <p><Link href="/">← Back home</Link></p>
        </article>
      </main>
      <Footer />
    </>
  );
}
