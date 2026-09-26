import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Footer } from "../components/Footer";

const name = "Fionn O'Connor";
const siteUrl = "https://fionn-oconnor.vercel.app";
const description =
  "Fionn O'Connor, AI Engineer building production ML and data pipelines. Experience, projects, and CV.";
export const siteTitle = "Fionn O'Connor – AI Engineer";

type LayoutProps = {
  children?: React.ReactNode;
  home?: boolean;
  blog?: boolean;
  work?: boolean;
  projects?: boolean;
};

function Layout({ children, home, blog, work, projects }: LayoutProps) {
  return (
    <div className="flex flex-col place-items-center w-full max-w-3xl px-4 py-4 m-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/images/propic.jpg`} />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/propic.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl text-center font-extrabold m-4">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/propic.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <p className="text-2xl m-4">
              <Link href="/">
                <a className="text-2xl font-extrabold">{name}</a>
              </Link>
            </p>
          </>
        )}
      </header>

      <main className="w-full">{children}</main>

      {/* Blog posts are the only pages without a flag */}
      {!blog && !home && !work && !projects && (
        <div className="text-xl hover:underline text-blue-700">
          <Link href="/posts/blog">
            <a>← Back to blog</a>
          </Link>
        </div>
      )}

      {!home && (
        <div className="pb-8 pt-4 text-xl hover:underline text-blue-700">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Layout;
