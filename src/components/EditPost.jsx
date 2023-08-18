import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';  

function EditPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    
  });

  useEffect(() => {
    const post = posts.find(post => post.id === parseInt(id));
    if (post) {
      setFormData({
        title: post.title,
        body: post.body,
       
      });
    }
  }, [id, posts]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate(); // Используйте useNavigate

  const handleSubmit = event => {
    event.preventDefault();
    // Вызываем действие редактирования поста
    dispatch(editPost({ id: parseInt(id), updatedPost: formData }));
    navigate(`/post/${id}`);
  };

  return (
    <div className="container">
      <h2>Редактировать пост</h2>
      <form onSubmit={handleSubmit}>
        {/* ... остальной код формы ... */}
        <button type="submit" className="btn btn-primary">Сохранить изменения</button>
      </form>
    </div>
  );
}

export default EditPost;
