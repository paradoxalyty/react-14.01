import { createStore, combineReducers } from 'redux';
import chatReducer from './chatReducer';

const reducer = combineReducers({
    chatReducer
});

export const initStore = (preloadedState = {}) => {
    return createStore(
        reducer,
        preloadedState,
        // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    )
};