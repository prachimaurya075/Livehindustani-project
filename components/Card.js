import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'


export default function Card({ id, title, summary, image, publishedAt, category }) {
return (
	<Link href={`/articles/${id}`} className="block group">
		<article className="rounded-md overflow-hidden shadow-sm bg-white">
{image ? (
<div className="relative h-48 w-full">
<Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" priority={false} style={{ objectFit: 'cover' }} />
</div>
) : (
<div className="h-48 flex items-center justify-center bg-gray-100">No image</div>
)}
<div className="p-3">
<p className="text-sm text-gray-500">{category} • {format(new Date(publishedAt), 'dd MMM yyyy')}</p>
<h3 className="mt-2 font-semibold text-lg">{title}</h3>
<p className="mt-1 text-sm text-gray-700 line-clamp-2">{summary}</p>
</div>
		</article>
	</Link>
)
}