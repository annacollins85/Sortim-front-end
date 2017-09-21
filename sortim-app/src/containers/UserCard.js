import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div className="UserCard">
        <div className="Img"></div>
        <div className="UserInfo">
          <div className="UserName">Name: Anna</div>
          <div className="CommonEvents">Events in Common: La Mercé</div>
        </div>
        <div className="Connect">
          <div className="No"></div>
          <div className="Yes"></div>
        </div>
      </div>
    );
  }
}

export default UserCard;
