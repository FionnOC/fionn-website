import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Footer } from "../components/Footer";

const name = "Fionn O'Connor";
export const siteTitle = "Intro to Fionn";

type LayoutProps = {
  children?: React.ReactNode;
  home?: boolean;
};

function Layout({ children, home }: LayoutProps) {
  return (
    <div className="flex flex-col place-items-center max-w-xs md:max-w-lg lg:max-w-3xl p-4 m-auto">
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
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          // I think this empty bracket below is what header displays if you are on the home page
          <>
            <Image
              priority
              src="/images/propic.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />

            <h1 className="text-4xl text-center font-extrabold  m-4">{name}</h1>
          </>
        ) : (
          // therefore, this is what header shows when you are not on the homepage
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
            <h2 className="text-2xl m-4">
              <Link href="/">
                <a className="text-2xl font-extrabold">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* I think children here is then basically just what is the first-post.tsx file */}
      <main className="pb-4">{children}</main>

      {/* if not on home, show the following at the bottom of the page */}
      {!home && (
        <div className="m-12 text-xl hover:underline text-blue-500">
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
