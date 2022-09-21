import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
          <h3 className="text-2xl leading-normal font-bold font-sans py-4 text-left">
            Hi there! Welcome to my website :)
          </h3>
          <p className="my-4 text-xl">
            I am a fourth-year student at Trinity College Dublin studying
            computer engineering who is a well-rounded, positive, and ambitious
            person.
          </p>
          <p className="my-4 text-xl">
            Over the past few years, I have worked in many different roles, from
            trainee to supervisor, and due to my previous experiences and my
            computer engineering studies, I have great problem-solving skills.{" "}
          </p>
          <p className="my-4 text-xl">
            I am seeking an internship that would allow me to apply my skills
            and experiences, while also fostering my love for technology.
          </p>
          <Link href="/posts/work">
            <a className="text-xl hover:underline text-blue-500">
              Work Experience
            </a>
          </Link>
        </section>
      </div>
    </Layout>
  );
}
