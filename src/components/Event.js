import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';

class Event extends Component {

  render() {
    return (
      <Link to={`/events/${this.props.event.id}`}>
        <div className="Event">
          <img className="EventImg" src={this.props.event.picture.data.url} alt="event"/>
          <div className="EventInfo">
            <h2>{this.props.event.name}</h2>
            <h3>{moment(this.props.event.start_time).format('LLL')}</h3>
          </div>
        </div>
      </Link>
    );
  }
}

export default Event;
