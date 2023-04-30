import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';
import './App.css';

function App() {
  return (
    <div className="container justify-content-center">
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/post" component={ Posts } />
    </Switch>
  </div>
  );
}

export default App;
