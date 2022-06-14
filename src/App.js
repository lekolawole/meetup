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
      currentLocation: "all",
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

  updateNumberOfEvents = (newNumberOfEvents) => {
    this.setState(
      {
        numberOfEvents: newNumberOfEvents
      },
      this.updateEvents(this.state.currentLocation)
    );
  };

  updateEvents = (location, eventsNumber) => {

    // if (eventsNumber === undefined) {
    //   eventsNumber = this.state.numberOfEvents;
    // } else {
    //   this.setState({ numberOfEvents: eventsNumber })
    // }
    //checks whether list is from 'all' or 'suggestions'
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location
      });
    });
  }

  render() {
    const { events, numberOfEvents } = this.state;
     return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={(number) => {
        this.updateNumberOfEvents(number)
      }} />
      <EventList numberOfEvents={numberOfEvents} events={events} />
    </div>
  );
  }
 
}

export default App;
