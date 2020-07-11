import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";
const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// import { createStore } from "redux"; ------>
// Just for theory
// Store
// Action
// const increment = () => {
//   return {
//     type: "Increment",
//   };
// };
// const decrement = () => {
//   return {
//     type: "Decrement",
//   };
// };
// // Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "Increment":
//       return state + 1;
//     case "Decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);
// // Display
// store.subscribe(() => console.log(store.getState()));

// // Dispatch
// store.dispatch(increment);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
