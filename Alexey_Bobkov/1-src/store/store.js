import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import { createLogger } from 'redux-logger'
import botMiddleware from '../middlewares/botMiddleware'
import chatMiddleware from '../middlewares/chatMiddleware'
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();
const reducer = combineReducers({
    chatReducer,
    profileReducer,
    router: connectRouter(history),
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const logger = createLogger();



export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, botMiddleware), ))
};