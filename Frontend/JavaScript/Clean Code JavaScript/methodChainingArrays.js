// Sample array of space missions
const spaceMissions = [
  { name: 'Apollo 11', crew: 3, destination: 'Moon', duration: 8 },
  { name: 'Mars Pathfinder', crew: 0, destination: 'Mars', duration: 1 },
  {
    name: 'Voyager 1',
    crew: 0,
    destination: 'Interstellar Space',
    duration: 44,
  },
  {
    name: 'SpaceX Crew-1',
    crew: 4,
    destination: 'International Space Station',
    duration: 180,
  },
  { name: 'New Horizons', crew: 0, destination: 'Pluto', duration: 10 },
];

// Chain all methods together
const duration = spaceMissions
  .map(({ crew, destination, name, duration }) => ({
    crew,
    destination,
    name: name.toUpperCase(),
    duration: duration * 60,
  }))
  .filter((mission) => mission.crew > 0)
  .reduce((totalDuration, mission) => totalDuration + mission.duration, 0);

console.log(duration);
