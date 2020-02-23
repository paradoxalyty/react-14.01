import { handleActions } from 'redux-actions';
import { profileRequest, profileSuccess, profileFailure } from './profileAction';

const defaultState = {
    profile: {},
    isLoading: false,
};

export default handleActions({
    [profileRequest]: (state) => {
        return {
            ...state,
            isLoading: true,
        }
    },
    [profileSuccess]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            profile: payload,
        };
    }
},
    defaultState);