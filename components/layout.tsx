import Head from 'next/head'
import styles from './layout.module.css'
import MainNavLink from './MainNavLink'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

const name = 'Kimballs Laredo'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="The site of NERB" />
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<header>
				
			</header>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					height: '100%',
					overflow: 'none',
					alignItems: 'flex-start',
				}}
			>
				<nav>
					{/* <div className={styles.nav_bg_square}></div> */}

					<menu>
						<h1 className={styles.nav_menu_title}>NERB</h1>
						<MainNavLink href="/dump">things</MainNavLink>
						<MainNavLink href="/about">information?</MainNavLink>
						<MainNavLink href="http://www.youtube.com">
							store??
						</MainNavLink>
					</menu>
					<svg
						style={{
							marginLeft: "1rem"
						}}
							width="20rem"
							height="20"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							opacity={0.5}
						>
							<rect
								x="0"
								y="0%"
								width="100%"
								height="25%"
								fill="black"
							/>
							<rect
								x="0"
								y="25%"
								width="100%"
								height="25%"
								fill="#ff57e5"
							/>
							<rect
								x="0"
								y="50%"
								width="100%"
								height="25%"
								fill="#897633"
							/>
							<rect
								x="0"
								y="75%"
								width="100%"
								height="25%"
								fill="#2366ff"
							/>
						</svg>
				</nav>
				<main className={styles.content}>
					{children}
				</main>
			</div>

			<footer>
				<svg
					style={{
						position: 'absolute',
						transform: 'translate(-50%, -90px) rotate(180deg)',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						minWidth: 1400,
					}}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="50%"
					height="90px"
					viewBox="0 20 1279 107"
				>
					<path
						fill-rule="evenodd"
						fill="rgb(0, 0, 0)"
						d="M1247.862,56.839 L1228.293,22.875 L1208.674,56.811 L1189.105,22.847 L1169.487,56.782 L1149.902,22.791 L1130.268,56.753 L1110.699,22.789 L1091.080,56.724 L1071.511,22.760 L1051.893,56.696 L1032.324,22.732 L1012.705,56.667 L993.136,22.703 L973.518,56.638 L953.933,22.647 L934.299,56.609 L914.730,22.645 L895.112,56.581 L875.543,22.617 L855.924,56.552 L836.355,22.588 L816.737,56.523 L797.168,22.559 L777.549,56.495 L757.965,22.503 L738.330,56.466 L718.762,22.502 L699.143,56.437 L679.574,22.473 L659.955,56.408 L640.387,22.444 L620.768,56.380 L601.199,22.415 L581.580,56.351 L562.012,22.387 L542.393,56.322 L522.809,22.331 L503.174,56.293 L483.605,22.329 L463.987,56.265 L444.418,22.300 L424.799,56.236 L405.230,22.272 L385.612,56.207 L366.043,22.243 L346.424,56.178 L326.840,22.187 L307.206,56.150 L287.637,22.185 L268.018,56.121 L248.449,22.157 L228.831,56.092 L209.262,22.128 L189.643,56.063 L170.074,22.099 L150.456,56.035 L130.871,22.043 L111.237,56.006 L91.668,22.042 L72.049,55.977 L52.480,22.013 L32.862,55.948 L0.871,0.425 L64.934,0.472 L64.934,0.472 L79.246,0.482 L79.246,0.482 L143.309,0.529 L182.528,0.558 L182.528,0.558 L196.840,0.569 L196.840,0.569 L260.902,0.616 L300.090,0.644 L300.090,0.644 L314.434,0.655 L314.434,0.655 L378.496,0.702 L417.684,0.731 L417.684,0.731 L431.996,0.741 L431.996,0.741 L496.059,0.788 L535.246,0.817 L535.246,0.817 L549.590,0.827 L549.590,0.827 L613.652,0.874 L652.840,0.903 L652.840,0.903 L667.152,0.914 L667.152,0.914 L731.215,0.961 L770.402,0.989 L770.402,0.989 L784.746,1.000 L784.746,1.000 L848.809,1.047 L887.996,1.075 L887.996,1.075 L902.309,1.086 L902.309,1.086 L966.371,1.133 L1005.590,1.162 L1005.590,1.162 L1019.902,1.172 L1019.902,1.172 L1083.965,1.219 L1123.152,1.248 L1123.152,1.248 L1137.496,1.258 L1137.496,1.258 L1201.558,1.305 L1240.746,1.334 L1279.933,1.363 L1247.862,56.839 Z"
					/>
				</svg>
				<svg
					style={{
						position: 'absolute',
						transform: 'translate(25.5%, -90px) rotate(180deg)',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						minWidth: 1400,
					}}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="50%"
					height="90px"
					viewBox="0 20 1279 107"
				>
					<path
						fill-rule="evenodd"
						fill="rgb(0, 0, 0)"
						d="M1247.862,56.839 L1228.293,22.875 L1208.674,56.811 L1189.105,22.847 L1169.487,56.782 L1149.902,22.791 L1130.268,56.753 L1110.699,22.789 L1091.080,56.724 L1071.511,22.760 L1051.893,56.696 L1032.324,22.732 L1012.705,56.667 L993.136,22.703 L973.518,56.638 L953.933,22.647 L934.299,56.609 L914.730,22.645 L895.112,56.581 L875.543,22.617 L855.924,56.552 L836.355,22.588 L816.737,56.523 L797.168,22.559 L777.549,56.495 L757.965,22.503 L738.330,56.466 L718.762,22.502 L699.143,56.437 L679.574,22.473 L659.955,56.408 L640.387,22.444 L620.768,56.380 L601.199,22.415 L581.580,56.351 L562.012,22.387 L542.393,56.322 L522.809,22.331 L503.174,56.293 L483.605,22.329 L463.987,56.265 L444.418,22.300 L424.799,56.236 L405.230,22.272 L385.612,56.207 L366.043,22.243 L346.424,56.178 L326.840,22.187 L307.206,56.150 L287.637,22.185 L268.018,56.121 L248.449,22.157 L228.831,56.092 L209.262,22.128 L189.643,56.063 L170.074,22.099 L150.456,56.035 L130.871,22.043 L111.237,56.006 L91.668,22.042 L72.049,55.977 L52.480,22.013 L32.862,55.948 L0.871,0.425 L64.934,0.472 L64.934,0.472 L79.246,0.482 L79.246,0.482 L143.309,0.529 L182.528,0.558 L182.528,0.558 L196.840,0.569 L196.840,0.569 L260.902,0.616 L300.090,0.644 L300.090,0.644 L314.434,0.655 L314.434,0.655 L378.496,0.702 L417.684,0.731 L417.684,0.731 L431.996,0.741 L431.996,0.741 L496.059,0.788 L535.246,0.817 L535.246,0.817 L549.590,0.827 L549.590,0.827 L613.652,0.874 L652.840,0.903 L652.840,0.903 L667.152,0.914 L667.152,0.914 L731.215,0.961 L770.402,0.989 L770.402,0.989 L784.746,1.000 L784.746,1.000 L848.809,1.047 L887.996,1.075 L887.996,1.075 L902.309,1.086 L902.309,1.086 L966.371,1.133 L1005.590,1.162 L1005.590,1.162 L1019.902,1.172 L1019.902,1.172 L1083.965,1.219 L1123.152,1.248 L1123.152,1.248 L1137.496,1.258 L1137.496,1.258 L1201.558,1.305 L1240.746,1.334 L1279.933,1.363 L1247.862,56.839 Z"
					/>
				</svg>
			</footer>
		</div>
	)
}
