// Step 1: Create a function to get sleep hours for each day
const getSleepHours = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 9;
      case 'thursday':
        return 8;
      case 'friday':
        return 5;
      case 'saturday':
        return 10;
      case 'sunday':
        return 11;
      default:
        return 'Invalid day';
    }
  };
  
  // Step 5: Create a function to get actual sleep hours for the week
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + 
           getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
           getSleepHours('sunday');
  };
  
  // Step 6: Create a function to get ideal sleep hours for the week
  const getIdealSleepHours = () => {
    const idealHoursPerNight = 8;
    return idealHoursPerNight * 7;
  };
  
  // Step 8: Create a function to calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed. You overslept by ${actualSleepHours - idealSleepHours} hours.`);
    } else {
      console.log(`You should get some rest. You underslept by ${idealSleepHours - actualSleepHours} hours.`);
    }
  };
  
  // Step 11: Start the program by calling calculateSleepDebt()
  calculateSleepDebt();