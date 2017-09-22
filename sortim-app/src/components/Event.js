import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <h2>{this.props.name}</h2>
        <h3>{this.props.start}</h3>
      </div>
    );
  }
}

export default Event;
