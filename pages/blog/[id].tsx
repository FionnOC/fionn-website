import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";

// const Post = () => {
//   const router = useRouter();
//   const { id } = router.query;
//
//   return (
//     <Layout>
//       <p>Post: {id}</p>
//     </Layout>
//   );
// };
//
// export default Post;

/*
NOTE to fionn

Figured out that all I need to do now is correctly output the contentHtml but finding it difficult
*/

export type postsDataProps = {
  postData: {
    id: string;
    author: string;
    contentHtml: string;
    data: { title: string; date: string };
  };
};

const Post = ({ postData }: postsDataProps) => {
  return (
    <Layout>
      <Head>
        <title>{postData.data.title}</title>
      </Head>
      <div className="pt-4">
        <div className="text-left">
          <div className="text-2xl font-bold">{postData.data.title}</div>
          {/* <br /> */}
          {/* {postData.data.date} */}
          <Date dateString={postData.data.date} />

          <hr />
        </div>
        <article
          className="prose lg:prose-xl py-8"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </Layout>
  );
};

// export async function getStaticPaths() {
//   // Return a list of possible id's
// }

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
  // fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
