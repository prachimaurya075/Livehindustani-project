import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

export default function Custom404() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "60px 20px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ marginBottom: 32, width: 120, height: 120 }}>
          <div style={{ ...getCardImageStyle("/images/error.svg"), width: "100%", height: "100%", borderRadius: 12 }} />
        </div>
        <h1 style={{ fontSize: 48, margin: 0, textAlign: "center" }}>404</h1>
        <p style={{ fontSize: 18, color: "var(--muted)", textAlign: "center", marginTop: 12 }}>Page not found</p>
        <p style={{ textAlign: "center", marginTop: 20 }}>
          <Link href="/" style={{ color: "var(--accent)" }}>← Go back home</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
