import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import MyStory from './screens/MyStory';
import MyWork from './screens/MyWork';

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
