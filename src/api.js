//This function takes events array and uses map to create new array w/ only locations.
//It removes duplicates by creating a new array using spread operator

 export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};