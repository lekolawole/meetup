import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    OfflineAlertText: '',
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({ events, locations: extractLocations(events) });
          }
    }); }
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
    if (this.state.showWelcomeScreen === undefined) return <div
className="App" />

     return (
    <div className="App">
      {navigator.onLine ? this.state.OfflineAlertText : <OfflineAlert text='You are offline. Some features may be unavailable until an internet connection can be establised.' />}
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={(number) => {
        this.updateNumberOfEvents(number)
      }} />
      <EventList numberOfEvents={numberOfEvents} events={events} />
      <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
    </div>
  );
  }
 
}

export default App;
