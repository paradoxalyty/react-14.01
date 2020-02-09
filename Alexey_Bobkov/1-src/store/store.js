import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';

const reducer = combineReducers({
    chatReducer,
    profileReducer,
})

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}