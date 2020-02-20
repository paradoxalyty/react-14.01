import {combineReducers, createStore, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import { createLogger } from 'redux-logger';

const reducer = combineReducers ({
    chatReducer, 
});

const logger =  createLogger ();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    return createStore (reducer, preloadedState, applyMiddleware (logger));
}