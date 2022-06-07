//This function takes events array and uses map to create new array w/ only locations.
//It removes duplicates by creating a new array using spread operator
import { mockData } from './mock-data';

export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const getEvents = async () => {
  return mockData;
};