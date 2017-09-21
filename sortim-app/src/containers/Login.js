import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAuth } from '../actions';

import FacebookLogin from 'react-facebook-login';

class Login extends Component {

  responseFacebook = (response) => {
    this.props.onFbLogin(response);
  }

  render() {
    return (
      <div className="login">
      <FacebookLogin
      appId="1551739381550538"
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile,user_events"
      callback={this.responseFacebook}
      />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authObj: state.auth.authObj
})

const mapDispatchToProps = (dispatch) => ({
  onFbLogin: (data) => dispatch(addAuth(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
