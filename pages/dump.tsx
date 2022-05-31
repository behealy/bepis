import Head from 'next/head'
import ArtworkThumbItem from '../components/ArtworkThumbItem'
import PageWrapper from '../components/PageWrapper';
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
			<PageWrapper>
				<div style={{
					display: 'flex',

				}}>
				{artworks.map((a) => (
					<ArtworkThumbItem artwork={a} />
				))}
				</div>
				
			</PageWrapper>
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
