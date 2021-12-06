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

  playMatch(userChoice) {
    return this.calculateResult(userChoice);
  },

  calculateResult(userChoice) {
    let cpuChoice = Math.floor(Math.random() * this.rps_array.length) + 1;
    cpuChoice = this.rps_array[cpuChoice - 1];
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
  }
};

export default RPS;
