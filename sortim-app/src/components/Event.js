import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Event extends Component {

  render() {
    return (
      <Link to={`/events/${this.props.event.id}`}>
        <div className="Event">
          <img className="EventImg" src={this.props.event.picture.data.url}/>
          <div className="EventInfo">
            <h2>{this.props.event.name}</h2>
            <h3>{this.props.event.start_time}</h3>
          </div>
        </div>
      </Link>
    );
  }
}

export default Event;
