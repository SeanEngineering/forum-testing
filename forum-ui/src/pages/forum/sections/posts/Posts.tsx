import React from 'react';
import PostCard from '../../components/post/PostCard';
import { PostWrapper } from './Posts.styled';

const Posts = () => {
  return (
    <PostWrapper>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostWrapper>
  );
};

export default Posts;
