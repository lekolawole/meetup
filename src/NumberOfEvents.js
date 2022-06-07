import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (e) => {
    let newValue = parseInt(e.target.value)
    this.setState({
      numberOfEvents: newValue
    });
    this.props.updateEvents(undefined, newValue);
  }

  render() {
    return(
      <div style={{"display":"inline"}} className="numberOfEvents">
        <p>Show
          <span>
            <input
              style={{"width":"5rem", "margin":"0 .5rem"}}
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