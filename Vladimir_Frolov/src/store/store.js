import { createStore, combineReducers } from 'redux'
import chatReducer from './chatReduser'
import profileReduser from './profileReduser'

const reducer = combineReducers({
    chatReducer,
    profileReduser
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, devTools)
}  
