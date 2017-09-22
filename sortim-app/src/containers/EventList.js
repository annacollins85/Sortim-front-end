import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addEvents } from '../actions';
import Event from '../components/Event.js';

class EventList extends Component {
  constructor (props) {
    super(props)
    this.fetchEvents()
  }

  fetchEvents() {
    fetch(`https://graph.facebook.com/v2.10/me/events?fields=start_time,end_time,id,name&access_token=${this.props.authObj.accessToken}`)
    .then(events => events.json())
    .then(events => events.data)
    .then(events => {
      events = events.filter(event => (
        Date.parse(event.end_time) >= Date.now()
      ))
      console.log('events', events);
      this.props.addEvents(events)
    })
  }

  render() {
    console.log('this.props.events', this.props.events);
    const events = this.props.events.map((event, index) => {
      return <Event key={index} name={event.name} start={event.start_time}/>
    })
    return (
      <div className="EventList">
        {events}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authObj: state.auth.authObj,
  events: state.entities.events
})

const mapDispatchToProps = (dispatch) => ({
  addEvents: (events) => dispatch(addEvents(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
