import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import Header from './components/header/Header';
import MyInput from './components/UI/input/MyInput';
import Footer from './components/Footer';
import PostFilter from './components/PostFilter';

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'бб 2', body: 'аа' },
    { id: 3, title: 'гг', body: 'гг' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})

  // Сортировка постов.
  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  // Сортировка и поиск постов.
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Header />
      <PostForm
        create={createPost}
      />
      <hr style={{margin: "15px 0"}}/>
      <PostFilter filter={filter} setFilter={setFilter} />
      {/*Условная отрисовка*/}
      {sortedAndSearchedPost.length
        ? <PostList posts={sortedAndSearchedPost} title="Посты про JS" remove={removePost} />
        : <h2 style={{textAlign: 'center'}}>Посты не были найдены.</h2>
      }
      <Footer />
    </div>
  );
};

export default App;
