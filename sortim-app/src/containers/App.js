import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import NavBar from './NavBar';
import Login from './Login';
import EventList from './EventList';
import UserCard from './UserCard';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest} render={ (props) => {
      return ( rest.authObj !== null
        ? (
          <Component {...rest} />
        )
        : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
      );
    }} />
  );
}

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Login}/>
        <PrivateRoute authObj={this.props.authObj} path="/events" component={EventList}/>
        <PrivateRoute authObj={this.props.authObj} path="/other-users" component={UserCard}/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authObj: state.auth.authObj
})

export default connect(mapStateToProps)(App);
