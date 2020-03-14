import { createActions } from "redux-actions";

export const { editProfile, profilesRequest, profilesSuccess, profilesFailure } = createActions({
    EDIT_PROFILE: (name) => ({ name }),
    PROFILES_REQUEST: () => ({}),
    PROFILES_SUCCESS: data => data,
    PROFILES_FAILURE: error => error,
});

export const loadProfiles = () => {
    return async (dispatch) => {
        try {
            dispatch(profilesRequest());
            const result = await fetch("/api/profiles.json");
            dispatch(profilesSuccess(await result.json()));
        } catch (e) {
            dispatch(profilesFailure(e));
        }
    }
}
