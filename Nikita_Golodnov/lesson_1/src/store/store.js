import {createStore, combineReducers} from 'redux'
import chatReducer from './chatReducer'

const reducer = combineReducers ({
    chatReducer
})

const extension = window.__REDUX_DEVTOOLS_EXTENSION__ ? window. __REDUX_DEVTOOLS_EXTENSION__ () : () => {} 

export const initStore = (preloadedState = {}) => {
    return createStore (reducer, preloadedState, extension)
}