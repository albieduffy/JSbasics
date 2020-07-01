const team = {
  _players: [
    {
      firstName: 'Albie',
      lastName: 'Duffy',
      age: 24      
    },
    {
      firstName: 'Max',
      lastName: 'Dewhurst',
      age: 23 
    },
    {
      firstName: 'Harold',
      lastName: 'Pearson',
      age: 22 
    }
  ],
  _games: [
    {
      opponent: 'UWE',
      teamPoints: 14,
      opponentPoints: 6
    },
    {
      opponent: 'Imperial',
      teamPoints: 11,
      opponentPoints: 10
    },
    {
      opponent: 'Sheffield',
      teamPoints: 8,
      opponentPoints: 7
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

console.log(team.players)

team.addGame('Polytechnic', 15, 9)

console.log(team.games)
