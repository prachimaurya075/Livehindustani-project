import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<header className="site-header">
			<div className="container nav-inner">
				<Link href="/" className="brand" aria-label="Home">
					<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
						<Image src="/images/logo.svg" alt="LiveHindustan" width={28} height={28} />
						<div className="logo">LiveHindustan</div>
					</div>
				</Link>

				<nav className={`main-nav ${open ? "open" : ""}`}>
					<ul>
						<li><Link href="/" className="nav-link">Home</Link></li>
						<li><Link href="/india" className="nav-link">India</Link></li>
						<li><Link href="/world" className="nav-link">World</Link></li>
						<li><Link href="/business" className="nav-link">Business</Link></li>
						<li><Link href="/sports" className="nav-link">Sports</Link></li>
						<li><Link href="/entertainment" className="nav-link">Entertainment</Link></li>
						<li><Link href="/trending" className="nav-link">Trending</Link></li>
						<li><Link href="/categories" className="nav-link">Categories</Link></li>
					</ul>
				</nav>

				<div className="nav-actions">
					<label className="search">
						<input className="search-input" placeholder="Search articles..." aria-label="Search" />
					</label>

					<button
						className={`hamburger ${open ? "is-active" : ""}`}
						onClick={() => setOpen(!open)}
						aria-label="Toggle menu"
						type="button"
					>
						<span></span><span></span><span></span>
					</button>
				</div>
			</div>
		</header>
	);
}
