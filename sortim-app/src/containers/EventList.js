import React, { Component } from 'react';

import Event from '../components/Event.js';

class EventList extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div className="EventList">
        <Event/>
        <Event/>
        <Event/>
      </div>
    );
  }
}

export default EventList;
