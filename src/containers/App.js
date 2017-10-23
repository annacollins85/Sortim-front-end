import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './NavBar';
import Login from './Login';
import EventList from './EventList';
import OtherUsersDeck from './OtherUsersDeck';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const LoginRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest} render={ (props) => {
      return ( rest.authObj === null
        ? (
          <Component {...rest} />
        )
        : (
          <Redirect to={{
            pathname: '/events',
            state: { from: props.location }
          }}/>
        )
      );
    }} />
  );
}

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
      <MuiThemeProvider>
      <div className="App">
        <NavBar/>
        <Switch>
            <LoginRoute exact authObj={this.props.authObj} path="/" component={Login}/>
            <PrivateRoute authObj={this.props.authObj} path="/events/:eventId" component={OtherUsersDeck}/>
            <PrivateRoute authObj={this.props.authObj} path="/events" component={EventList}/>
        </Switch>
      </div>
      </MuiThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  authObj: state.auth.authObj
})

export default connect(mapStateToProps)(App);
