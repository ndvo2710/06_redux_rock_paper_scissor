
const initialState = {
  bettingArray: [
    { id: "paper", img: "./img/paper.png", isBetting: true },
    { id: "rock", img: "./img/rock.png", isBetting: false },
    { id: "scissor", img: "./img/scissor.png", isBetting: false }
  ],
  result: "I'm iron man, I love you 3000 !!!",
  winScore: 0,
  totalGame: 0,
  computer: { id: "paper", img: "./img/paper.png" }
};

// GameResultMap[Player][Opponent] = "win" means Player Win Opponent
const win = 'win';
const lose = 'lose';
const gameResultMap = {
    'paper': {
        'scissor': lose,
        'rock': win
    },
    'rock': {
        'paper': lose,
        'scissor': win
    },
    'scissor': {
        'rock': lose,
        'paper': win
    },

}

const rpsGameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
    case "CHOOSE_ITEM":
      let newBettingArray = [...state.bettingArray];
      newBettingArray = newBettingArray.map((item, index) => {
        if (item.id === action.id) {
          item.isBetting = true;
          return { ...item };
        }
        item.isBetting = false;
        return { ...item };
      });
      state.bettingArray = newBettingArray;
      return { ...state };
    case "RANDOM":
      let rand1To3 = Math.floor(Math.random() * 3);
      let newComputerItem = state.bettingArray[rand1To3];
      state.computer = { ...newComputerItem };
      return { ...state };
    case "END_GAME":
        const player = state.bettingArray.find(item => item.isBetting === true);
        const computer = state.computer;
        switch (gameResultMap[player.id][computer.id]) {
            default:
                state.result = "Draw !!!";
                break;
            case "win":
                state.result = "I'm iron man, I love you 3000 !!!";
                state.winScore += 1;
                break;
            case "lose":
                state.result = "You Lose !!!";
                break;
        }
        state.totalGame += 1;
        return {...state}
  }
};

export default rpsGameReducer;
