import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import ArtworkThumbItem from "../components/ArtworkThumbItem";
import Layout, { siteTitle } from "../components/layout";
import { bepisArtworkDatasource, DisplayArtwork } from "../lib/artworks";
import utilStyles from "../styles/utils.module.css";

type Props = {
    artworks: DisplayArtwork[];
};

export default function Dump(props: Props) {
    const { artworks } = props;

    return (
        <>
            <Head>
                <title>{"Dump"}</title>
            </Head>
            <section>
                    {artworks.map((a) => (
                       <ArtworkThumbItem artwork={a}/>
                    ))}
            </section>
        </>
    );
}

export async function getStaticProps(context) {
    return {
        props: {
            artworks: await bepisArtworkDatasource.getArtworks(),
        },
    };
}
