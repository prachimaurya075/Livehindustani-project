import Link from 'next/link'

export default function Nav() {
	return (
		<nav className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-lg py-3 px-6 flex justify-between items-center">
			<div className="flex items-center gap-2">
				<img src="/images/logo.svg" alt="LiveHindustan Logo" className="h-8 w-8" />
				<span className="text-2xl font-extrabold text-white tracking-wide drop-shadow">LiveHindustan</span>
			</div>
			<ul className="flex space-x-8 text-lg font-medium">
				<li><a href="/" className="text-white hover:text-yellow-200 transition">Home</a></li>
				<li><a href="#" className="text-white hover:text-yellow-200 transition">Categories</a></li>
				<li><a href="#" className="text-white hover:text-yellow-200 transition">About</a></li>
			</ul>
		</nav>
	)
}
