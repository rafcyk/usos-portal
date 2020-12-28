import React from 'react';
import './App.css';
import Main from './Main';
import Home from './Home';
import Post from './pages/Post';

import Nav from './components/Nav';

import {Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <>
      <Nav/>

      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/home/:id' exact>
                        <Post/>
                    </Route>
      </Switch>
      </>
    );
  }

}

export default App;
