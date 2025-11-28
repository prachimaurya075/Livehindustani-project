import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'

export default function Hero({ article }) {
	if (!article) return null

	return (
		<section className="relative bg-gradient-to-br from-red-700 via-orange-500 to-yellow-400 text-white py-16 px-6 text-center overflow-hidden">
			<img src="/images/hero-bg.svg" alt="News Background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
			<div className="relative z-10">
				<h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">LiveHindustan News Portal</h1>
				<p className="text-xl md:text-2xl mb-8 font-medium">Stay updated with the latest headlines, breaking news, and exclusive stories from India and beyond.</p>
				<a href="#" className="inline-block bg-white text-red-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:text-white transition-all duration-200">Read Top Stories</a>
			</div>
		</section>
	)
}
