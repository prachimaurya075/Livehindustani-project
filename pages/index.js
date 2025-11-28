import fs from 'fs'
import path from 'path'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ArticleList from '../components/ArticleList'


export async function getStaticProps() {
const filePath = path.join(process.cwd(), 'data', 'articles.json')
const json = fs.readFileSync(filePath, 'utf-8')
const articles = JSON.parse(json)


return {
props: { articles },
revalidate: 60 // ISR: regenerate page at most every 60s
}
}


export default function Home({ articles }) {
	if (!articles || articles.length === 0) {
		return (
			<Layout>
				<h2 className="text-xl font-semibold text-center py-20">No news available 😢</h2>
			</Layout>
		)
	}

		return (
			<Layout>
				<Hero />
				<main className="bg-gray-50 min-h-screen">
					<section className="max-w-7xl mx-auto px-4 py-10">
						<h2 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">Latest Headlines</h2>
						<ArticleList articles={articles} />
					</section>
				</main>
			</Layout>
		)
}