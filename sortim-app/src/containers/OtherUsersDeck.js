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

  cardThrown = (e) => {
    if(e.throwDirection === Direction.RIGHT){
      console.log('SWIPED RIGHT!!!');
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
            <div key={item.id} className="Card">
              <img draggable={false} src={item.img} className="CardImage" alt="profile-pic"/>
              <h2>{item.name}</h2>
            </div>
          )}
        </Swing>
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
