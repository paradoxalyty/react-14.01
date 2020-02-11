import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import chatReducer from './chatReduser'
import profileReduser from './profileReduser'
import botMiddleWare from './botMiddleware'
import { connectRouter } from 'connected-react-router'
import { persistReducer } from 'redux-persist';

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'


import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer'],
 };

export const history = createBrowserHistory();

const reducer = (history)=> combineReducers({
    router: connectRouter(history),
    chatReducer,
    profileReduser,
    
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };

const middlewares=compose(
    applyMiddleware(routerMiddleware(history), botMiddleWare),
    devTools
);



export const initStore = (preloadedState = {}) => {
    return createStore(persistReducer(persistConfig,reducer(history)), preloadedState, middlewares)
}  
