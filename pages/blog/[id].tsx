import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
    contentHtml: string;
    data: { title: string; date: string };
  };
};

const Post = ({ postData }: postsDataProps) => {
  return (
    <Layout>
      {postData.data.title}
      <br />
      {postData.id}
      <br />
      {postData.data.date}

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default Post;
