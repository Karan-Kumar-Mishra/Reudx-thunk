// src/redux/store.js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"; // You can combine reducers here

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
