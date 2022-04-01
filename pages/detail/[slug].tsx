import { bepisArtworkDatasource, DisplayArtwork } from '../../lib/artworks'

interface Props {
	artwork: DisplayArtwork
}

export default function ArtworkDetail(props: Props) {
	const { artwork } = props

	return (
		<article>
			<h1>{artwork.title}</h1>
		</article>
	)
}

export async function getStaticPaths() {
	return {
		paths: await (
			await bepisArtworkDatasource.getArtworkSlugs()
		).map((slug) => {
			return { params: { slug: slug } }
		}),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	return {
		props: {
			artwork: await bepisArtworkDatasource.getArtworkBySlug(params.slug),
		},
	}
}
