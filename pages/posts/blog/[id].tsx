import Layout from "../../../components/Layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import Date from "../../../components/date";

export type postsDataProps = {
  postData: {
    id: string;
    contentHtml: string;
    data: { title: string; date: string };
  };
};

const Post = ({ postData }: postsDataProps) => {
  return (
    <Layout>
      <Head>
        <title>{`${postData.data.title} – Fionn O'Connor`}</title>
      </Head>
      <article className="pt-4">
        <div className="text-left">
          <h1 className="text-2xl font-bold">{postData.data.title}</h1>
          <Date dateString={postData.data.date} />
          <hr />
        </div>
        <div
          className="prose lg:prose-lg py-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export type paramsProps = {
  params: { id: string };
};

export async function getStaticProps({ params }: paramsProps) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
