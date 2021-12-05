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
  }
};

export default RPS;
