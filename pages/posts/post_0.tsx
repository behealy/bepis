import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>All about little piss bois</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated wiht PISS`)
        }
      />
      <h1>All about little piss bois</h1>
      <h2>
        <Link href="/">
          <a>Return from whence ye cum</a>
        </Link>
      </h2>
    </Layout>
  );
}
