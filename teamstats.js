// Step 1: Create an empty team object
const team = {};

// Step 2: Add _players and _games properties initialized to empty arrays
team._players = [];
team._games = [];

// Step 3: Populate _players array with three players
team._players.push({
  firstName: 'John',
  lastName: 'Doe',
  age: 25
});

team._players.push({
  firstName: 'Jane',
  lastName: 'Smith',
  age: 28
});

team._players.push({
  firstName: 'Michael',
  lastName: 'Jordan',
  age: 45
});

// Step 4: Populate _games array with three games
team._games.push({
  opponent: 'Rockets',
  teamPoints: 110,
  opponentPoints: 95
});

team._games.push({
  opponent: 'Lakers',
  teamPoints: 105,
  opponentPoints: 100
});

team._games.push({
  opponent: 'Warriors',
  teamPoints: 98,
  opponentPoints: 102
});

// Step 5: Create a getter method to retrieve players
Object.defineProperty(team, 'players', {
  get: function() {
    return this._players;
  }
});

// Step 6: Create a getter method to retrieve games
Object.defineProperty(team, 'games', {
  get: function() {
    return this._games;
  }
});

// Step 7: Create a method to add a new player to the team
team.addPlayer = function(newFirstName, newLastName, newAge) {
  const newPlayer = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this._players.push(newPlayer);
};

// Step 8: Test the .addPlayer() method
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

// Step 9: Create a method to add game results
team.addGame = function(newOpponent, newTeamPoints, newOpponentPoints) {
  const newGame = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this._games.push(newGame);
};

// Step 10: Test the .addGame() method
team.addGame('Titans', 100, 98);
console.log(team.games);