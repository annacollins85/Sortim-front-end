import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAuth } from '../actions';
import { Link } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';

class Login extends Component {

  responseFacebook = (response) => {
    console.log(this.props.authObj);
    console.log(response);
    this.props.onFbLogin(response);
  }

  render() {
    return (
      <div className="login">
        <Link to="/events">Events</Link>
        <FacebookLogin
          appId="1551739381550538"
          autoLoad={false}
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
