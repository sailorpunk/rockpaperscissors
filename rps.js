const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
	} else {
  	console.log('Error!');
	}
};

let getComputerChoice = () => {
  getComputerChoice = Math.floor(Math.random() * 3);
  switch (getComputerChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
      break;
  }
}

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You Lose!'
    } else {
      return 'You Win!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'You Lose!'
    } else {
      return 'You Win!'
    }
}
  if (userChoice === 'scissor') {
    if (gomputerChoice === 'rock') {
      return 'You Lose!'
    } else {
      return 'You Win!'
    }
}
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}.`);
  console.log(`Computer chose ${computerChoice}.`)
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
