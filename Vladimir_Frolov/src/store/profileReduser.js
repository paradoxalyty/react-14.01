import {handleActions} from 'redux-actions';
import {loadProfileSuccess} from './profileActions'

const defaultState={}



export default handleActions({
    [loadProfileSuccess]: (state, {payload}) => {
        return {
            ...state,
            user: payload
        }
    }
}, defaultState);