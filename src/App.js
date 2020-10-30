import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//*** Custom Components ***//
import Navbar from './components/navbar';
import PostList from './components/post-list';
import EditPost from './components/edit-post';
import CreatePost from './components/create-post';
import CreateUser from './components/create-user';


function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Switch>
        <Route path='/' exact component={PostList}/>
        <Route path='/edit/:id' component={EditPost}/>
        <Route path='/create'component={CreatePost}/> 
        <Route path='/user' component={CreateUser}/> 
      </Switch> 
    </div>
  );
}

export default App;
