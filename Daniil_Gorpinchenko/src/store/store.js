import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import { createLogger } from 'redux-logger';

const reducer = combineReducers({
    chatReducer
})

const logger =createLogger();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (PreloadedState = {}) => {
    return createStore(reducer, PreloadedState, compose(applyMiddleware(logger, botMiddleware), devTools))
}