import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <div >
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/post" component={ Post } />
    </Switch>
  </div>
  );
}

export default App;
