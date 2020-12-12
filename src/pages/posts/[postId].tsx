import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/layout';

interface PostProps {}

const Post: NextPage<PostProps> = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Layout>
      <h1 className="text-5xl">Post: {postId}</h1>
      <p>This is a post</p>
    </Layout>
  );
};

export default Post;
