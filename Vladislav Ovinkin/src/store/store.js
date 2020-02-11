import {combineReducers, createStore} from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers ({
    chatReducer, 
});

export const initStore = (preloadedState = {}) => {
    return createStore (reducer, preloadedState);
}