import { useRouter } from "next/router";
import { useCallback } from "react";
import { DisplayArtwork } from "../lib/artworks";

interface Props {
	artwork: DisplayArtwork
}

export default function ArtworkThumbItem(props: Props) {
	const { artwork: a } = props;
	const router = useRouter();

	const onClick = useCallback(() => {
		router.push(`detail/${a._slug}`)
	}, [router, a._slug])

	return (
		<div
			onClick={onClick}
			key={a._id}
			style={{
				position: 'relative',
				display: 'inline-block',
				// flex: 1,
				border: 'white 2px solid',
				width: '31%',
				height: 0,
				paddingBottom: '31%',
				margin: `0  1.15%`,
				cursor: 'pointer',
				// width: width,
				// height: width,
				backgroundImage: `url(${a.preview})`,
				backgroundSize: '100% 100%',
				//    backgroundPosition: "50% 50%"
				boxShadow: '2px 1px 5px #dadada',
			}}
		>
			<picture
				style={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}
			>
				<img
					src={a.preview}
					style={{
						height: '100%',
						width: '100%',
					}}
				/>
			</picture>
		</div>
	)
}
