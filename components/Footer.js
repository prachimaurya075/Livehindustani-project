import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCardImageStyle } from "../utils/imageHelper";

export default function Footer() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");

	const subscribe = (e) => {
		e.preventDefault();
		const ok = /\S+@\S+\.\S+/.test(email);
		if (!ok) {
			setStatus("Please enter a valid email address.");
			return;
		}
		setStatus("Subscribed — thank you!");
		console.log("newsletter subscribe:", email);
		setEmail("");
		setTimeout(() => setStatus(""), 4000);
	};

	return (
		<footer className="site-footer" aria-label="Site footer">
			<div className="container" style={{ padding: "28px 0" }}>
				<div
					style={{
						display: "flex",
						gap: 24,
						flexWrap: "wrap",
						justifyContent: "space-between",
						alignItems: "flex-start",
					}}
				>
					<div style={{ flex: "1 1 260px", minWidth: 220 }}>
						<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
							<Image
								src="/images/logo.svg"
								alt="LiveHindustan"
								width={36}
								height={36}
							/>
							<div style={{ fontWeight: 800, fontSize: 18 }}>
								LiveHindustan
							</div>
						</div>
						<p
							className="muted"
							style={{ marginTop: 12 }}
						>
							Reliable local and national news — updated hourly. Reach us for
							advertising and partnerships.
						</p>
						<div
							style={{ marginTop: 12, fontSize: 13 }}
							className="muted"
						>
							Contact:{" "}
							<a
								href="mailto:contact@livehindustan.local"
								style={{ color: "var(--text)" }}
							>
								contact@livehindustan.local
							</a>
						</div>
					</div>

					<div
						style={{
							display: "flex",
							gap: 32,
							flex: "1 1 420px",
							minWidth: 260,
						}}
					>
						<div>
							<h4 style={{ marginBottom: 8 }}>Quick links</h4>
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								<li>
									<Link href="/" className="muted">
										Home
									</Link>
								</li>
								<li>
									<Link href="/categories" className="muted">
										Categories
									</Link>
								</li>
								<li>
									<Link href="/trending" className="muted">
										Trending
									</Link>
								</li>
								<li>
									<Link href="/search" className="muted">
										Search
									</Link>
								</li>
								<li>
									<Link href="/about" className="muted">
										About
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 style={{ marginBottom: 8 }}>Featured Authors</h4>
							<ul
								style={{
									listStyle: "none",
									padding: 0,
									margin: 0,
								}}
							>
								<li>
									<Link
										href="/author/priya-sharma"
										className="muted"
									>
										Priya Sharma
									</Link>
								</li>
								<li>
									<Link
										href="/author/arjun-rao"
										className="muted"
									>
										Arjun Rao
									</Link>
								</li>
								<li>
									<Link
										href="/author/neha-verma"
										className="muted"
									>
										Neha Verma
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div style={{ flex: "0 1 300px", minWidth: 220 }}>
						<h4 style={{ marginBottom: 8 }}>Newsletter</h4>
						<form
							onSubmit={subscribe}
							style={{
								display: "flex",
								gap: 8,
								flexDirection: "column",
							}}
						>
							<input
								className="search-input"
								type="email"
								placeholder="Your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								aria-label="Email for newsletter"
							/>
							<button
								type="submit"
								style={{
									background: "var(--accent)",
									color: "#fff",
									border: "none",
									padding: "8px 12px",
									borderRadius: 8,
									cursor: "pointer",
								}}
							>
								Subscribe
							</button>
							{status && (
								<div
									style={{
										marginTop: 8,
										color: "var(--muted)",
										fontSize: 13,
									}}
								>
									{status}
								</div>
							)}
						</form>

						<div
							style={{
								marginTop: 12,
								display: "flex",
								gap: 12,
								alignItems: "center",
							}}
						>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								style={{ color: "var(--muted)" }}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden
								>
									<path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.4c0-2.2 1.3-3.5 3.3-3.5.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.33v1.6h2.36l-.38 2.9h-1.98V22A10 10 0 0022 12z" />
								</svg>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								style={{ color: "var(--muted)" }}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden
								>
									<path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.7-.7.4-1.5.6-2.4.8C18.3 4.9 17.3 4 16 4c-1.8 0-3.2 1.5-3.2 3.3 0 .3 0 .6.1.9-2.7-.1-5.1-1.5-6.7-3.6-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-.9.1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.2 1.8-.3 0-.7 0-1-.1 1.9 1.2 4.1 1.9 6.5 1.9 7.8 0 12-6.7 12-12.5v-.6c.9-.7 1.6-1.4 2.1-2.3-.8.4-1.7.7-2.6.8z" />
								</svg>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								style={{ color: "var(--muted)" }}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden
								>
									<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.9A4.1 4.1 0 1016.1 12 4.1 4.1 0 0012 7.9zM18.4 6.3a1.2 1.2 0 11-1.2-1.2 1.2 1.2 0 011.2 1.2zM12 9.6a2.4 2.4 0 11-2.4 2.4A2.4 2.4 0 0112 9.6z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div
					style={{
						marginTop: 20,
						borderTop: "1px solid rgba(255,255,255,0.03)",
						paddingTop: 16,
						textAlign: "center",
						color: "var(--muted)",
					}}
				>
					© {new Date().getFullYear()} LiveHindustan — All rights reserved. &nbsp;|&nbsp;
					<Link href="/privacy" className="muted">
						Privacy
					</Link>{" "}
					&nbsp;|&nbsp;{" "}
					<Link href="/terms" className="muted">
						Terms
					</Link>
				</div>
			</div>
		</footer>
	);
}
