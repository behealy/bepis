import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Dump() {
    return (
        <>
            <Head>
                <title>{"Dump"}</title>
            </Head>
            <section>
                <div
                    style={
                        {
                            // display: "flex",
                            // flexDirection: "row",
                            // height: width,
                        }
                    }
                >
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            style={{
                                position: "relative",
                                display: "inline-block",
                                // flex: 1,
                                border: "white 2px solid",
                                width: "31%",
                                height: 0,
                                paddingBottom: "31%",
                                margin: `0  1.15%`
                                // width: width,
                                // height: width,
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    border: "solid black 1px"
                                }}
                            >
                                sdsfasdf
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: width,
                    }}
                >
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: "red",
                                flex: 1,
                                border: "white 2px solid",
                                width: width,
                                height: width,
                            }}
                        />
                    ))}
                </div> */}
            </section>
        </>
    );
}
