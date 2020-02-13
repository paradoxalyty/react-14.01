import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import { createLogger } from 'redux-logger'
import botMiddleware from '../middlewares/botMiddleware'

const reducer = combineReducers({
    chatReducer,
    profileReducer,
})

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const logger = createLogger();

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, compose(applyMiddleware(logger, botMiddleware), devTools))
}