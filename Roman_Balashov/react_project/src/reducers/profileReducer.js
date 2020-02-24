import { handleActions } from "redux-actions";
import { editProfile, profilesRequest, profilesSuccess, profilesFailure } from "../actions/profileActions";

const defaultState = {
    profiles: {},
    isLoading: false
}

export default handleActions({
    [editProfile]: (state, { payload: { name } }) => {
        return {
            ...state,
            profiles: {
                ...state.profiles,
                name: state.profiles.name
            }
        }
    },
    [profilesRequest]: (state) => {
        return {
            ...state,
            isLoading: true
        }
    },
    [profilesSuccess]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            profiles: payload
        }
    },
    [profilesFailure]: state => {
        return {
            ...state,
            isLoading: false
        }
    }
}, defaultState);
