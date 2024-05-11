// import { createStore } from "redux";
// خط بالایی معادل خط پایین است
// const createStore = require("redux").createStore;

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applayMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
// action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}

function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER",
  };
}

function incrementCounterByAmount(amount) {
  return {
    type: "INCREMENT_COUNTER_BY_AMOUNT",
    payload: amount,
  };
}
function incrementNumber() {
  return {
    type: "INCREMENT_NUMBER",
  };
}

const initialCounterState = {
  counter: 0,
};
const initialNumberState = {
  number: 5,
};

// reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 2,
      };
    case "INCREMENT_COUNTER_BY_AMOUNT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 2,
      };
    default:
      return state;
  }
};

// store
const rootReducer = combineReducers({
  counter: counterReducer,
  number: numberReducer,
});
// const store = createStore(counterReducer);
const store = createStore(rootReducer, applayMiddleware(logger));

console.log(store.getState());

store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByAmount(5));
store.dispatch(incrementNumber());
