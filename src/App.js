import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  updateEvents = (location, eventsNumber) => {

    if (eventsNumber === undefined) {
      eventsNumber = this.state.numberOfEvents;
    } else {
      this.setState({ numberOfEvents: eventsNumber })
    }
    //checks whether list is from 'all' or 'suggestions'
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventsNumber),
        numberOfEvents: eventsNumber
      });
    });
  }

  render() {
     return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
    </div>
  );
  }
 
}

export default App;
