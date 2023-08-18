import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/posts'); // 
    return response.data;
  });
  

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, updatedPost } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        Object.assign(existingPost, updatedPost);
      }
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter(post => post.id !== postId);
    },
    toggleFavorite: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.favorite = !post.favorite;
      }
    },
    toggleLike: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  removeFromFavorites: (state, action) => {
      const postId = action.payload;
      const post = state.find(post => post.id === postId);
      if (post) {
        post.favorite = false;
      }
    },
});

export const {
  addPost,
  editPost,
  deletePost,
  toggleFavorite,
  toggleLike,
} = postsSlice.actions;




export default postsSlice.reducer;
