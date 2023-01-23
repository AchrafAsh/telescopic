import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Telescopic</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="py-4 px-6 flex justify-between items-center text-sm">
                <div>⌘ / Achraf Ash / me3x</div>
                <nav className="flex space-x-3">
                    <a href="https://www.telescopic.dev/changelog">Changelog</a>
                    <a href="https://www.telescopic.dev/docs">Docs</a>
                </nav>
            </header>
            <nav className="px-4 flex space-x-2 border-b">
                <Link href="/">
                    <div
                        className={classnames(
                            "pb-2 border-b-2",
                            router.pathname === "/"
                                ? "border-black"
                                : "border-white"
                        )}
                    >
                        <span className="text-sm py-2 px-4 rounded-md hover:bg-slate-100">
                            Overview
                        </span>
                    </div>
                </Link>
                <Link href="/console">
                    <div
                        className={classnames(
                            "pb-2 border-b-2",
                            router.pathname === "/console"
                                ? "border-black"
                                : "border-white"
                        )}
                    >
                        <span className="text-sm py-2 px-4 rounded-md hover:bg-slate-100">
                            Console
                        </span>
                    </div>
                </Link>
                <Link href="/schema">
                    <div
                        className={classnames(
                            "pb-2 border-b-2",
                            router.pathname === "/schema"
                                ? "border-black"
                                : "border-white"
                        )}
                    >
                        <span className="text-sm py-2 px-4 rounded-md hover:bg-slate-100">
                            Schema
                        </span>
                    </div>
                </Link>
                <Link href="/settings">
                    <div
                        className={classnames(
                            "pb-2 border-b-2",
                            router.pathname === "/settings"
                                ? "border-black"
                                : "border-white"
                        )}
                    >
                        <span className="text-sm py-2 px-4 rounded-md hover:bg-slate-100">
                            Settings
                        </span>
                    </div>
                </Link>
            </nav>
            <main>{children}</main>
        </>
    );
};

export default Layout;
