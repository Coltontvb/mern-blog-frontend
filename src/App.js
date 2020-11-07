import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

//*** Custom Components ***//
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import UserList from './components/indexUsers';
import UserLogin from './components/loginUser';
import UserRegister from './components/createUser';
import PostList from './components/indexPosts';
import ViewPost from './components/viewPost';
//<Route path='/posts/:postId' component={ViewPost}></Route>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/posts' exact component={PostList}></Route>
        <Route path='/posts/:postId'><ViewPost/></Route>
        <Route path='/users' component={UserList}></Route>
        <Route path='/login' component={UserLogin}></Route>
        <Route path='/register' component={UserRegister}></Route>
      </Switch> 
    </div>
  );
}

export default App;
