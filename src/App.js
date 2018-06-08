import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style/style.css';

import RequiredAuth from './components/auth/required_auth';
import UserControl from './components/user_views/user-control';
import UserData from './components/user_views/user-data-form';
import Home from './components/home-page';
import Navbar from './components/navbar';
import SignUp from './components/sign-up';
import LogIn from './components/sign-in';
import Search from './components/user_views/user-search';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/user/userdata" component={RequiredAuth(UserData)} />
          <Route path="/user/login" component={LogIn} />
          <Route path="/user/search" component={RequiredAuth(Search)} />
          <Route path="/user" component={RequiredAuth(UserControl)} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
