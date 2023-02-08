import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import Header from './components/header/Header';
import MyInput from './components/UI/input/MyInput';
import Footer from './components/Footer';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'бб 2', body: 'аа' },
    { id: 3, title: 'гг', body: 'гг' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

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
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Header />
      <MyButton style={{marginBottom: '15px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPost} title="Посты про JS" remove={removePost} />
      <Footer />
    </div>
  );
};

export default App;
