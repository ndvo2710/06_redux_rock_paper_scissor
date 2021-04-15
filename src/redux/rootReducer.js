import { combineReducers } from "redux";
import rpsGameReducer from "./rpsGameReducer";

const rootReducer = combineReducers({
  rpsGameReducer
});

export default rootReducer;
