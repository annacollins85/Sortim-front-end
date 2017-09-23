import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';

import { connect } from 'react-redux';
import { addOtherUsers } from '../actions';

class OtherUsersDeck extends Component {

  constructor(props) {
    super(props);
    this.fetchOtherUsers();
  }

  fetchOtherUsers() {
    console.log('this.props', this.props);
    fetch(`https://graph.facebook.com/v2.10/${this.props.computedMatch.params.eventId}/interested?access_token=${this.props.authObj.accessToken}`)
    .then(otherUsers => otherUsers.json())
    .then(otherUsers => otherUsers.data)
    .then(otherUsers => this.props.addOtherUsers(otherUsers))
  }

  render() {
    const data = this.props.otherUsers;
    console.log(data);
    return (
        <Cards className='master-root'>
          {data.map(item =>
            <Card key={item.id}>
              <h2>{item.name}</h2>
            </Card>
          )}
        </Cards>
    )
  }
}

// <div className="OtherUsersDeck">
//   <div className="Img"></div>
//   <div className="UserInfo">
//     <div className="UserName">Name: Anna</div>
//     <div className="CommonEvents">Events in Common: La Mercé</div>
//   </div>
//   <div className="Connect">
//     <div className="No"></div>
//     <div className="Yes"></div>
//   </div>
// </div>

const mapStateToProps = (state) => ({
  otherUsers: state.entities.otherUsers
})

const mapDispatchToProps = (dispatch) => ({
  addOtherUsers: (eventId) => dispatch(addOtherUsers(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherUsersDeck);
