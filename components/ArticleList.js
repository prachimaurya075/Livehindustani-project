import Card from './Card'

export default function ArticleList({ articles = [] }) {
	if (!articles || articles.length === 0) {
		return <section className="w-full max-w-7xl mx-auto px-4 py-10">
			<h2 className="text-3xl font-bold mb-8 text-gray-800">Latest News</h2>
			<p className="text-center py-8 text-gray-500">No articles available.</p>
		</section>;
	}

	return (
		<section className="w-full max-w-7xl mx-auto px-4 py-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{articles.map(a => (
				<Card key={a.id} {...a} />
			))}
			</div>
		</section>
	);
}
