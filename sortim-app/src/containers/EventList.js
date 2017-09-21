import React, { Component } from 'react';

import Event from '../components/Event.js';

class EventList extends Component {
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
