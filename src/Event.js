import React, { Component } from "react";



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
        <h2 className="startDate">{event.start.dateTime} ({event.start.timeZone})</h2>
        <h1 className="summary">{event.summary}</h1>
        <p className="location">{event.location}</p>
        <button 
          className={`details-button ${collapsed ? "show" : "hide"}-details`}
         onClick={this.handleClick}>Details
        </button>
        {!collapsed && (
          <div className="event-details collapsed">
            <p className="description">{event.description}</p>
            <p>{event.end.dateTime} ({event.end.timeZone})</p>
            <a className="event-link" href={event.htmlLink}>Event Link</a>
          </div>
        )}
      </div>
    )
  }
}

export default Event;