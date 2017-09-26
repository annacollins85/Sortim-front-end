import React, { Component } from 'react';
import Swing from 'react-swing';
import { Direction } from 'swing';

import { connect } from 'react-redux';
import { addOtherUsers } from '../actions';
import { getOtherUsers } from '../Service';

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
      console.log('data', data);
      console.log(this.props.authObj.id);
      return data.filter(el => el.id !== this.props.authObj.id)
    })
    .then(data => this.props.addOtherUsers(data))
  }

  render() {
    const data = this.props.otherUsers;
    return (
        <Swing
          className="stack"
          tagName="div"
          setStack={(stack)=> this.setState({stack:stack})}
          ref="stack"
          throwout={(e) => console.log('throwout', e)}
        >
          {data.map(item =>
            <div key={item.id} className="card">
              <img src={item.img} alt="profile-pic"/>
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
