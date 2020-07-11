import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogger: loggedReducer,
});

export default allReducer;
