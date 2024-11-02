import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import thunk as a default export
import rootReducer from './reducers'; // You can combine reducers here

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Pass thunk as middleware
);

export default store;
