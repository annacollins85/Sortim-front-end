import React, { Component } from 'react';
import Swing from 'react-swing';
import { Direction } from 'swing';

import { connect } from 'react-redux';
import { addOtherUsers } from '../actions';
import { getOtherUsers } from '../Service';
import { sendInvite } from '../Service';

class OtherUsersDeck extends Component {

  constructor(props) {
    super(props);
    this.fetchOtherUsers();
  }


  fetchOtherUsers() {
    const eventId = this.props.computedMatch.params.eventId;
    getOtherUsers(eventId)
    .then(data => data.json())
    .then(data => {
      return data.filter(el => el.email !== this.props.authObj.email)
    })
    .then(data => this.props.addOtherUsers(data))
  }

  cardThrown = async (e) => {
    if(e.throwDirection === Direction.RIGHT){
      const eventId = this.props.computedMatch.params.eventId;
      const data = {
        eventId: eventId,
        ids: {
          currentUser: this.props.authObj.id,
          otherUser: e.target.id,
        }
      }
      const invite = await sendInvite(data);
      if (invite === 'send email') {
        console.log('send email');
      }
    }
  }

  render() {
    const data = this.props.otherUsers;
    return (
        <Swing
          className="stack"
          tagName="div"
          setStack={(stack)=> this.setState({stack:stack})}
          ref="stack"
          throwout={this.cardThrown}
        >
          {data.map(item =>
            <div id={item.id} key={item.id} className="Card">
              <img draggable={false} src={item.img} className="CardImage" alt="profile-pic"/>
              <h2>{item.name}</h2>
            </div>
          )}
        </Swing>
    )
  }
}

const mapStateToProps = (state) => ({
  otherUsers: state.entities.otherUsers
})

const mapDispatchToProps = (dispatch) => ({
  addOtherUsers: (eventId) => dispatch(addOtherUsers(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherUsersDeck);
