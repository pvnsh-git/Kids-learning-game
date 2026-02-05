import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { auth } from './reducers/auth';
import { todo } from './reducers/todo';
import { userDetails } from './reducers/user';


// Load data from local storage 
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') || '{}')
  : {};

const reducers = combineReducers({todo, auth, userDetails})
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });
console.log('store', store);
export type AppDispatch = typeof store.dispatch;

export default store;