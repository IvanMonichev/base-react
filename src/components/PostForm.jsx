import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});
  // const bodyInputRef = useRef();

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = { ...post, id: Date.now() }
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form action="#" method="post">
      {/*Управляемый компонент*/}
      <MyInput
        type="text"
        name="title"
        id="title"
        placeholder="Наименование поста"
        value={post.title} onChange={(evt) => setPost({...post, title: evt.target.value})}
      />
      {/*Неконтролируемый компонент*/}
      {/*<MyInput type="text" name="body" id="body" placeholder="Описание поста" ref={bodyInputRef} />*/}
      <MyInput
        type="text"
        name="body"
        id="body"
        placeholder="Описание поста"
        value={post.body}
        onChange={(evt) => setPost({...post, body: evt.target.value})}
      />
      <MyButton onClick={addNewPost} style={{marginLeft: 'auto', display: 'block'}}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
