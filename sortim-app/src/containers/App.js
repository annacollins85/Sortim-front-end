import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar';
import Login from './Login';
import EventList from './EventList';
import UserCard from './UserCard';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={props => (this.state.authObj ? (<Component {...props}/> : (
//     <Redirect to={{pathname: '/login', state: { from: props.location}}}/>
//   )
// )}/>
// )

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    this.props.authObj ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {


  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Login}/>
        <PrivateRoute path="/events" component={EventList}/>
        <PrivateRoute path="/other-users" component={UserCard}/>
      </div>
      </Router>
    );
  }
}

export default App;
