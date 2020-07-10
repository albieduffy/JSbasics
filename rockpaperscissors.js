// Get user choice

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error! Choose valid option.')
  }
};

//Get computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
};

// Determine winner
const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === 'bomb') {
     return 'You have nuked the computer. You win.'
   };
   if (userChoice === computerChoice) {
     return 'Game is tied.';
   };
   if (userChoice === 'rock') {
     if (computerChoice === 'paper') {
       return 'Computer wins.'
     } else {
       return 'User wins.'
     }
   };
   if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
       return 'Computer wins.'
     } else {
       return 'User wins.'
     }
   };
   if (userChoice === 'scissors') {
     if (computerChoice === 'rock') {
       return 'Computer wins.'
     } else {
       return 'User wins.'
     }
   };
 }

// Play game
const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice} and computer threw ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
