import { handleActions } from "redux-actions";
import { addProfile, profilesRequest, profilesSuccess, profilesFailure } from "../actions/profileActions";

const defaultState = {
    profiles: {},
}

export default handleActions({
    [addProfile]: (state, { payload: { id, name } }) => {
        return {
            ...state,
            profiles: {
                ...state.profiles,
                [id]: {
                    name: state.profiles[id].name
                }
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
