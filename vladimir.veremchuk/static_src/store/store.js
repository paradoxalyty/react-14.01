import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer.js'
import botMiddleware from './botMiddleware.js';
import chatMiddleware from './chatMiddleware.js';
import {createBrowserHistory} from 'history'
import {routerMiddleware, connectRouter} from 'connected-react-router'

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer, 
    router: connectRouter(history),
});

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState ={}) => {
return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), chatMiddleware, botMiddleware)));
} 