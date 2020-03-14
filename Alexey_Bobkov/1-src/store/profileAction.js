import { createActions } from 'redux-actions'


export const { profileRequest, profileSuccess, profileFailure } = createActions({

    PROFILE_REQUEST: () => ({}),
    PROFILE_SUCCESS: (data) => (data),
    PROFILE_FAILURE: (error) => (error),
});



export const loadProfile = () => {
    return async (dispatch) => {
        try {
            dispatch(profileRequest())
            const result = await fetch('/api/profile.json');
            dispatch(profileSuccess(await result.json()))
        } catch (e) {
            dispatch(profileFailure(e))
        }
    }
}

