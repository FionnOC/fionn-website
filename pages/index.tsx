import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

// export type ListOfBlogProps = {
//   id: string;
//   title: string;
//   date: string;
// };

// export default function Home({ allPostsData }: allPostsDataProps) {
const Home = ({}) => {
  return (
    <Layout home>
      <div className="flex flex-col py-2">
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="">
          <h3 className="text-2xl leading-normal font-bold font-sans py-4 text-center">
            Hi there! A little bit about me ...
          </h3>
          <div className="mb-4 text-justify grid grid-cols-1 place-items-center">
            <p className="my-4 text-lg">
              Masters student at Trinity College Dublin studying Computer
              Engineering who is a passionate, hard-working, people person with
              technical skills.
            </p>
            <p className="my-4 text-lg">
              Worked in many different industries and roles, from trainee to
              supervisor, and due to my previous experiences and my computer
              engineering studies, I have strong leadership skills.
            </p>
            <p className="my-4 text-lg">
              Many other interests apart from computer engineering - have played
              the fiddle for the past 13 years; playing weekly in sessions in
              Dublin and in the Fleadh in a céilí band, and also solo.
            </p>
            <p className="my-4 text-lg">
              Avid climber, and try to boulder as much as possible; Active
              member in the Trinity Climbing Club. Love to take photos of
              friends and family and travel whenever I can!
            </p>

            <div className="flex">
              <Link href="/posts/work">
                <a className="text-xl hover:underline text-blue-500 p-4">
                  Work Experience
                </a>
              </Link>
              <Link href="/posts/projects">
                <a className="text-xl hover:underline text-blue-500 p-4">
                  College Projects
                </a>
              </Link>
              <Link href="/posts/blog">
                <a className="text-xl hover:underline text-blue-500 p-4">
                  Visit my Blog!
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
