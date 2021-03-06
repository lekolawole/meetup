import React, { Component } from "react";
import './App.css';

class Event extends Component {
  state = {
    collapsed: true
  }

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <p className="location">@{event.summary} | {event.location}</p>
        <h4 className="startDate">{event.start.dateTime.slice(0, 10)} {event.start.dateTime.slice(11, 16)} ({event.start.timeZone})</h4>
        <button 
          className={`details-button ${collapsed ? "show" : "hide"}-details`}
         onClick={this.handleClick}>Details
        </button>
        {!collapsed && (
          <div className="event-details collapsed">
            <p className="description">{event.description}</p>
            <p>End Time: {event.end.dateTime.slice(0, 10)} {event.end.dateTime.slice(11, 16)} ({event.end.timeZone})</p>
            <a className="event-link" href={event.htmlLink}>Add to Google Calendar</a>
          </div>
        )}
      </div>
    )
  }
}

export default Event;