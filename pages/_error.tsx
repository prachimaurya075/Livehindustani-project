import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCardImageStyle } from "../utils/imageHelper";

export default function ErrorPage({ statusCode }: { statusCode?: number }) {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "60px 20px", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ marginBottom: 32, width: 120, height: 120 }}>
          <div style={{ ...getCardImageStyle("/images/error.svg"), width: "100%", height: "100%", borderRadius: 12 }} />
        </div>
        <h1>Something went wrong</h1>
        <p style={{ color: "var(--muted)" }}>
          {statusCode ? `Error code: ${statusCode}` : "An unexpected error occurred."}
        </p>
        <p><Link href="/" style={{ color: "var(--accent)" }}>← Go back home</Link></p>
      </main>
      <Footer />
    </>
  );
}
