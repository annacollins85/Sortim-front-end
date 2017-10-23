import React, { Component } from 'react';

import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { logOut } from '../actions';

class NavBar extends Component {

  renderUserNav () {
    if (this.props.authObj) {
      return (
        <div className="UserNav">
          <FlatButton onClick={this.logOut} label="Log Out" primary={true} />
          <img className="ProfPic" src={this.props.authObj.picture.data.url} alt="profile-picure"/>
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
          <h3>Sortim</h3>
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
