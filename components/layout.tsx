import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import MainNavLink from "./MainNavLink";
import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import useAnimatedPageRouter from "./useAnimatedPageRouter";
import PageRouterContext from "./PageRouterContext";

const name = "Kimballs Laredo";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
    const ctxVal = useAnimatedPageRouter();

    // const { showContent, onAnimationComplete } = ctxVal;

    const [currentKids, setCurrentKids] = useState();
    const [showContent, setShowContent] = useState(false);

    const contentClassList = useMemo(() => {
        return showContent
            ? `${styles.content} ${styles.shown}`
            : styles.content;
    }, [showContent]);

    useEffect(() => {
        if (!currentKids) {
            console.log("set current kids");
            setCurrentKids(children);
            setShowContent(true);
        } else {
            console.log("set next kids");
            setShowContent(false);
        }
    }, [children, setShowContent]);

    const onAnimationComplete = useCallback(() => {
        setCurrentKids(children);
        setShowContent(true);
    }, [setCurrentKids, setShowContent, children]);

    console.log(showContent);

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
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
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <PageRouterContext.Provider value={ctxVal}>
                <header>
                    <div className={styles.headerLinksWrapper}>
                        <MainNavLink href="/dump">shit</MainNavLink>
                        <MainNavLink href="/about">who??</MainNavLink>
                        <MainNavLink href="http://www.youtube.com">
                            shop
                        </MainNavLink>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: 1,
                            background:
                                "linear-gradient(90deg, rgba(255,255,255,1) 13%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 90%)",
                        }}
                    ></div>
                    <div
                      style={{
                        width: "100%",
                        height: 50
                      }}
                    
                    >

                    </div>
                </header>
                <main
                    onTransitionEnd={onAnimationComplete}
                    className={contentClassList}
                >
                    {currentKids}
                </main>
            </PageRouterContext.Provider>
        </div>
    );
}
