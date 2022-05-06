import Link from 'next/link'
import { useRouter } from 'next/router'
import { classListBuilder } from '../lib/cssUtils'
import styles from './mainNavLink.module.css'

const classes = classListBuilder(styles)

function MainNavLink({ children, href }) {
	const router = useRouter()
	const myRoute = router.asPath === href

	return (
		<li className={styles.nav_link_holder}>
			<span
				style={{
					position: 'relative',
					paddingRight: 80,
				}}
			>
				<span
					className={classes({
						if: myRoute,
						then: 'main_nav_link_bg_block.selected',
						else: 'main_nav_link_bg_block',
					})}
				></span>
				<Link href={href}>
					<a
						href={href}
						className={classes({
							if: myRoute,
							then: 'mainNavLink.selected',
							else: 'mainNavLink',
						})}
					>
						{children}
					</a>
				</Link>
			</span>
		</li>
	)
}

export default MainNavLink
