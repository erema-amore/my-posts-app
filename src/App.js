import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllPosts from './components/AllPosts';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import FavoritePosts from './components/FavoritePosts';
import SinglePost from './components/SinglePost';
import NotFound from './components/NotFound';
import SearchPosts from './components/SearchPosts';





import axios from 'axios';

function App() {
  const api = axios.create({
    baseURL: 'http://localhost:5000', 
  });
  return (
    <Router>
      <NavBar />
      <Switch>
  <Route exact path="/" component={AllPosts} />
  <Route path="/add-post" component={AddPost} />
  <Route path="/post/:id" component={SinglePost} />
  <Route path="/edit-post/:id" component={EditPost} />
  <Route path="/favorites" component={FavoritePosts} />
  <Route path="/search" component={SearchPosts} />
  <Route component={NotFound} /> {}
</Switch>

      <Footer />
    </Router>
  );
}

export default App;
