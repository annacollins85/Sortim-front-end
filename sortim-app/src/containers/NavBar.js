import React, { Component } from 'react';

import { connect } from 'react-redux';

import { logOut } from '../actions';

class NavBar extends Component {
 logOut = () => {
   this.props.logOut()
 }

  render() {
    return (
      <div className="NavBar">
        <button onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authObj: state.auth.authObj
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
