import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/home/Home';
import MyStory from './screens/myStory/MyStory';
import MyWork from './screens/myWork/MyWork';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <MyStory />
        </Route>
        <Route exact path='/work'>
          <MyWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
