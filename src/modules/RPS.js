const RPS = {
  rps_array: [
    {
      id: 1,
      name: "rock",
      image: "https://i.ibb.co/85RsmCg/rock-card.jpg"
    },
    {
      id: 2,
      name: "paper",
      image: "https://i.ibb.co/K2PsRrs/paper-card.jpg"
    },
    {
      id: 3,
      name: "scissor",
      image: "https://i.ibb.co/2kd8Gtw/scissor-card.jpg"
    }
  ],

  index() {
    return this.rps_array;
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
      cpuChoice = Math.floor(Math.random() * this.rps_array.length) + 1;
      cpuChoice = this.rps_array[cpuChoice - 1];
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
        return this.rps_array[1];

      case 'paper':
        return this.rps_array[2];

      case 'scissor':
        return this.rps_array[0];

      default:
        break;
    }
  }
};

export default RPS;
