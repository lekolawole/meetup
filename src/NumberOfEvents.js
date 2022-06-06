import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (e) => {
    let value = parseInt(e.target.value)
    this.setState({
      numberOfEvents: value
    });
  }

  render() {
    return(
      <div className="numberOfEvents">
        <p>Show
          <span>
            <input
              className="number-of-events"
              type="number"
              value={this.state.numberOfEvents}
              onChange={this.handleChange}
              >
            </input>
          </span>
          Events
        </p>
      </div>
    )
  }
}

export default NumberOfEvents;