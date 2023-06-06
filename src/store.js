import { createStore, combineReducers } from "redux";

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

// Load state from local storage if available
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(rootReducer, persistedState);

// Save state to local storage whenever the state changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;



















// import { createStore, combineReducers } from "redux";

// import todos from "./reducer/todo";

// const rootReducer = combineReducers({
//   todos,
// });

// const store = createStore(rootReducer);

// export default store;
