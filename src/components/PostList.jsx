import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map(((post, index) =>
        <PostItem post={post} number={index + 1} key={post.id} remove={remove} />))}
    </div>
)
  ;
};

export default PostList;
