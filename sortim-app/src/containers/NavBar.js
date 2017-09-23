import React, { Component } from 'react';

import Logo from '../logo.png';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { logOut } from '../actions';

class NavBar extends Component {

  renderUserNav () {
    if (this.props.authObj) {
      return (
        <div className="UserNav">
          <FlatButton onClick={this.logOut} label="Log Out" primary={true} />
          <img src={this.props.authObj.picture.data.url} />
        </div>
      )
    }
  }

  logOut = () => {
    this.props.logOut()
  }

  render() {
    return (
      <div className="NavBar">
        <div className="LogoDiv">
          <img className="Logo" src={Logo}/>
        </div>
        {this.renderUserNav()}
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
