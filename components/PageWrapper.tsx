import Head from 'next/head'
import { ReactChild, useEffect, useState } from 'react';
import styles from './page-wrapper.module.css';

type Props = {
	children: ReactChild;
}

export default function PageWrapper(props: Props) {
    const { children } = props;

	const [classList, setClassList] = useState(styles.content);

	useEffect(() => {
		const h = requestAnimationFrame(() => {
			setClassList(`${styles.content} ${styles.shown}`);
		})
		return () => {
			cancelAnimationFrame(h);
			setClassList(`${styles.content}`);
		}
	}, []);

	return (
		<>
			<Head>
				<title>{'Dump'}</title>
			</Head>
			<section className={classList}>
				{children}
			</section>
		</>
	)
}
