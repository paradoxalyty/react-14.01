import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import chatReducer from "../reducers/chatReducer";
import botMiddleware from "../middlewares/botMiddleware";
import chatMiddleware from "../middlewares/chatMiddleware";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createLogger } from "redux-logger";

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),
});

const logger = createLogger();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, chatMiddleware, botMiddleware)));
}