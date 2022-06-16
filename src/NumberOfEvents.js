import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }

  handleChange = (e) => {
    const number = e.target.value;

    if(number < 1 || number > 32) {
      this.setState({
        numberOfEvents: number,
        infoText: 'Please choose a number between 1 and 32'
      });
    } else {
      this.setState({
      numberOfEvents: number,
      infoText: ''
    });
    this.props.updateNumberOfEvents(number);
    }
  }

/////////// <input> Element for NumberOfEvents

  render() {
    return(
      <div className="numberOfEvents">
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
        <ErrorAlert text={this.state.infoText} />
      </div>
    )
  }
}

export default NumberOfEvents;