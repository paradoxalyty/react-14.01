import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import {createLogger} from 'redux-logger/src';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'messanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer'],
};

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),
});

const logger = createLogger();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    const store = createStore(
        persistReducer(persistConfig, reducer),
        preloadedState,
        compose(applyMiddleware(routerMiddleware(history), logger, botMiddleware, chatMiddleware), devTools),
    );

    /*const persistor = persistStore(store);*/

    return {store, /*persistor*/};
};