import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

import { GetStaticProps, GetStaticPaths } from "next";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <p>Post: {id}</p>
    </Layout>
  );
};

export default Post;
