import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex flex-col py-2">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg">
          <a
            href="/FionnOConnor_CV.pdf"
            className="font-semibold hover:underline text-blue-700"
          >
            Download CV (PDF)
          </a>
          <a
            href="mailto:fionn010@gmail.com"
            className="hover:underline text-blue-700"
          >
            fionn010@gmail.com
          </a>
        </div>

        <h2 className="text-2xl leading-normal font-bold font-sans pt-8 pb-4 text-center">
          Hi, I&apos;m Fionn
        </h2>
        <p className="my-4 text-lg">
          I&apos;m an AI Engineer at Siemens Healthineers, where I build
          production ML and data pipelines, from statistical anomaly detection
          on field instrument data to NLP for compliance.
        </p>
        <p className="my-4 text-lg">
          I hold a First Class Honours MEng in Computer Engineering from Trinity
          College Dublin, and spent an Erasmus semester studying AI at KU
          Leuven. I like owning a problem from raw data through to production,
          and working directly with the people who use what I build.
        </p>
        <p className="my-4 text-lg">
          Outside of work, I&apos;ve been playing the fiddle since 2006, in a
          céilí band at the Fleadh and solo. I&apos;m an avid climber and
          boulder as much as I can, and film photography is a huge hobby of
          mine. I love taking photos of friends and family whenever I can!
        </p>

        <nav className="flex flex-wrap justify-center">
          <Link href="/posts/work">
            <a className="text-xl hover:underline text-blue-700 p-4">
              Experience &amp; Education
            </a>
          </Link>
          <Link href="/posts/projects">
            <a className="text-xl hover:underline text-blue-700 p-4">
              Projects
            </a>
          </Link>
        </nav>
      </section>
    </Layout>
  );
};

export default Home;
