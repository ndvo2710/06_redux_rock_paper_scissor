const initialState = {
  bettingArray: [
    { id: "paper", img: "./img/paper.png", isBetting: false },
    { id: "rock", img: "./img/rock.png", isBetting: true },
    { id: "scissor", img: "./img/scissor.png", isBetting: false }
  ],
  result: "I'm iron man, I love you 3000 !!!",
  winScore: 0,
  totalGame: 0,
  computer: { id: "paper", img: "./img/paper.png" }
};

const rpsGameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rpsGameReducer;
