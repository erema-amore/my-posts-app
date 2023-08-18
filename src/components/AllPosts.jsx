
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice'; 

function AllPosts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); 
  }, [dispatch]);

  
}

export default AllPosts