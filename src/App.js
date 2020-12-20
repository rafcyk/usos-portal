import React from 'react';
import './App.css';
import Main from './Main';
import Home from './Home';
import User from './User';

import Nav from './components/Nav';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact>
            <Main/>
          </Route>
          <Route path='/home' exact>
            <Home/>
          </Route>
          <Route path='/user'>
            <User/>
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
