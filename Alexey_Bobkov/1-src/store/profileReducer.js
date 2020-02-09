import { handleActions } from 'redux-actions';
import { loadProfile } from './chatAction.js';

const defaultState = {
    profile: {
        name: "Alexey",
        Description: "Student ReactJS"

    }
};

export default handleActions({
    [loadProfile]: (state) => {
        return {
            ...state,
            profile: {
                name: "Alexey",
                Description: "Student ReactJS"
            }
        }
    }
}, defaultState);