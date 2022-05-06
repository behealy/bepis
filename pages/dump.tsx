import Head from 'next/head'
import ArtworkThumbItem from '../components/ArtworkThumbItem'
import { bepisArtworkDatasource, DisplayArtwork } from '../lib/artworks'

type Props = {
	artworks: DisplayArtwork[]
}

export default function Dump(props: Props) {
	const { artworks } = props

	return (
		<>
			<Head>
				<title>{'Dump'}</title>
			</Head>
			<section>
				{artworks.map((a) => (
					<ArtworkThumbItem artwork={a} />
				))}
			</section>
		</>
	)
}

export async function getStaticProps(context) {
	return {
		props: {
			artworks: await bepisArtworkDatasource.getArtworks(),
		},
	}
}
