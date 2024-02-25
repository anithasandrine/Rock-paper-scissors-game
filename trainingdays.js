
// Function to get a random event
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // Declaring random variable in local scope
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to get training days based on event
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// Function to log event
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log training time
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Get event and days for Nala
const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);

// Log Nala's event and training time
logEvent(name, event);
logTime(name, days);

// Get event and days for Warren
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

// Log Warren's event and training time
logEvent(name2, event2);
logTime(name2, days2);
