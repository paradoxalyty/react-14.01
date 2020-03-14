import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import { createLogger } from 'redux-logger';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
//проверить орфографию еще раз 
const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),

});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
const logger = createLogger();


export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, chatMiddleware, botMiddleware, apiMiddleware, thunk), devTools));
};