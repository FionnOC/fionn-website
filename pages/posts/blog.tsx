import Head from "next/head";
import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export type allPostsDataProps = {
  allPostsData: { id: string; data: { title: string; date: string } }[];
};

const blog = ({ allPostsData }: allPostsDataProps) => {
  return (
    <Layout blog>
      <Head>
        <title>Fionns Blog</title>
      </Head>
      <section>
        <h2 className="text-3xl py-4 font-bold">Blog</h2>
        <ul>
          {allPostsData?.map(({ id, data }) => (
            <li key={id} className="pb-4">
              <div className=" text-md lg:text-xl hover:underline text-blue-500">
                <Link href={`/posts/blog/${id}`}>{data.title}</Link>
              </div>
              <small>
                <Date dateString={data.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default blog;
