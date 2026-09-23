import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";
import Date from "../components/date";

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
            Hi, I&apos;m Fionn
          </h3>
          <div className="mb-4 text-justify grid grid-cols-1 place-items-center">
            <p className="my-4 text-lg">
              I&apos;m an AI Engineer at Siemens Healthineers, where I build
              production ML and data pipelines, from statistical anomaly
              detection on field instrument data to NLP for compliance.
            </p>
            <p className="my-4 text-lg">
              I hold a First Class Honours MEng in Computer Engineering from
              Trinity College Dublin, and spent an Erasmus semester studying AI
              at KU Leuven. I like owning a problem from raw data through to
              production, and working directly with the people who use what I
              build.
            </p>
            <p className="my-4 text-lg">
              Outside of work, I&apos;ve been playing the fiddle for 13 years,
              in a céilí band at the Fleadh and solo. I&apos;m an avid climber
              and boulder as much as I can, and film photography is a huge hobby
              of mine. I love taking photos of friends and family whenever I
              can!
            </p>

            <div className="flex">
              <Link href="/posts/work">
                <a className="text-xl hover:underline text-blue-500 p-4">
                  Work Experience
                </a>
              </Link>
              <Link href="/posts/projects">
                <a className="text-xl hover:underline text-blue-500 p-4">
                  Projects
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
