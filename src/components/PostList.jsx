import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

  if (!posts.length) {
    return (
      <h2 style={{textAlign: 'center'}}>Посты не были найдены.</h2>
    )
  };

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
