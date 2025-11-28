import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Layout from '../../components/Layout'


export async function getStaticPaths() {
const filePath = path.join(process.cwd(), 'data', 'articles.json')
const json = fs.readFileSync(filePath, 'utf-8')
const articles = JSON.parse(json)


const paths = articles.slice(0, 6).map(a => ({ params: { id: a.id } }))
return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {
const filePath = path.join(process.cwd(), 'data', 'articles.json')
const json = fs.readFileSync(filePath, 'utf-8')
const articles = JSON.parse(json)
const article = articles.find(a => a.id === params.id)

if (!article) {
	return { notFound: true }
}

// Format date on server for hydration consistency
let formattedDate = '';
try {
	const { format } = require('date-fns');
	formattedDate = format(new Date(article.publishedAt), 'dd/MM/yyyy, h:mm a');
} catch (e) {
	formattedDate = article.publishedAt;
}

return { props: { article: { ...article, formattedDate } }, revalidate: 60 }
}


export default function ArticlePage({ article }) {
	if (!article) {
		return (
			<Layout>
				<h2 className="text-center py-20 text-xl font-semibold">Article not found ❌</h2>
			</Layout>
		)
	}

	return (
		<Layout>
			<main className="bg-gray-50 min-h-screen py-10">
				<article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
					<div className="w-full mb-6">
						<Image
							src={article.image || '/images/no-image.svg'}
							alt={article.title}
							width={1200}
							height={600}
							className="rounded-xl object-cover shadow-md"
						/>
					</div>
					<h1 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight">{article.title}</h1>
					<p className="text-gray-500 text-base mb-6">{article.formattedDate} &bull; <span className="font-semibold text-gray-700">{article.author}</span></p>
					<p className="text-lg leading-relaxed text-gray-800 mb-2">{article.content}</p>
				</article>
			</main>
		</Layout>
	)
}