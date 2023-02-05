import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

// https://youtu.be/GNrdg3PzpJQ?t=4176

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm
        create={createPost}
      />
      <hr style={{margin: "15px 0"}}/>
      <div>
        <MySelect
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {/*Условная отрисовка*/}
      {posts.length
        ? <PostList posts={posts} title="Посты про JS" remove={removePost} />
        : <h2 style={{textAlign: 'center'}}>Посты не были найдены.</h2>
      }
    </div>
  );
};

export default App;
