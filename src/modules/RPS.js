const RPS = {
  rps_array: [
    {
      id: 1,
      name: "rock",
      image: "https://i.ibb.co/GQ9KV4d/rock-card.jpg"
    },
    {
      id: 2,
      name: "paper",
      image: "https://i.ibb.co/SBL3Ysr/paper-card.jpg"
    },
    {
      id: 3,
      name: "scissor",
      image: "https://i.ibb.co/4j3cNtk/scissor-card.jpg"
    }
  ],

  index() {
    return this.rps_array;
  }
};

export default RPS;
