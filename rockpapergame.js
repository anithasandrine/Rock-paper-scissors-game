
// Step 1: Get the user's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); // Step 2
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { // Step 3
    return userInput;
  } else if (userInput === 'bomb') { // Step 14
    return userInput;
  } else {
    console.log('Error! Invalid input.'); // Step 3
  }
};

// Step 5: Get the computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Step 7: Determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!'; // Step 7
  }
  if (userChoice === 'rock') { // Step 8
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') { // Step 9
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') { // Step 10
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb') { // Step 14
    return 'You won!';
  }
};

// Step 12: Start the game
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); // Step 13
};

// Step 13: Call the playGame function to start the game
playGame(); 

