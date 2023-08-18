
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice'; 

function AddPost() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', body: '', image: '' });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost(formData)); 
    setFormData({ title: '', body: '', image: '' });
  };

  
}export default AddPost