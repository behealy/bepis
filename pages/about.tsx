import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
    return (
        <>
            <Head>
                <title>{"About"}</title>  
            </Head>
            <section className={utilStyles.headingMd}>
                about
            </section>
        </>
    );
}
