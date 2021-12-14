import rpsArray from '../assets/data/rpsArray';

const RPS = {
  index() {
    return rpsArray;
  },

  playMatch(userChoice, userChoicesHistory) {
    return this.calculateResult(userChoice, userChoicesHistory);
  },

  calculateResult(userChoice, userChoicesHistory) {
    let cpuChoice = undefined;
    let lastIndex = userChoicesHistory.length - 1;
    if (userChoicesHistory.length >= 2 &&
      userChoicesHistory[lastIndex] === userChoicesHistory[lastIndex - 1]) {
      cpuChoice = this.cpuPicksCounter(userChoicesHistory[lastIndex]);
    };

    if (!cpuChoice) {
      cpuChoice = Math.floor(Math.random() * rpsArray.length);
      cpuChoice = rpsArray[cpuChoice];
    }
    const matchResult = {
      result: '',
      cpuChoice: cpuChoice
    };

    if (((userChoice === 'rock') && (cpuChoice.name === 'rock')) ||
      ((userChoice === 'paper') && (cpuChoice.name === 'paper')) ||
      ((userChoice === 'scissor') && (cpuChoice.name === 'scissor'))) {
      matchResult.result = "That's a draw!";
    } else if (((userChoice === 'rock') && (cpuChoice.name === 'paper')) ||
      ((userChoice === 'paper') && (cpuChoice.name === 'scissor')) ||
      ((userChoice === 'scissor') && (cpuChoice.name === 'rock'))) {
      matchResult.result = "CPU wins!";
    } else {
      matchResult.result = "You win!";
    }
    return matchResult;
  },

  cpuPicksCounter(userChoice) {
    switch (userChoice) {
      case 'rock':
        return rpsArray[1];

      case 'paper':
        return rpsArray[2];

      case 'scissor':
        return rpsArray[0];

      default:
        break;
    }
  }
};

export default RPS;
