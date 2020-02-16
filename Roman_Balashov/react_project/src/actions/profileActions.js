import { createActions } from "redux-actions";
import { getJSON, RSAA } from "redux-api-middleware";

export const { addProfile, profilesRequest, profilesSuccess, profilesFailure } = createActions({
    ADD_PROFILE: (name) => ({ name }),
    PROFILES_REQUEST: () => ({}),
    PROFILES_SUCCESS: data => data,
    PROFILES_FAILURE: error => error,
});

export const loadProfiles = () => {
    return async (dispatch) => {
        try {
            dispatch(profilesRequest);
            const result = await fetch("/api/profiles.json");
            dispatch(profilesSuccess(await result.json()));
        } catch (e) {
            dispatch(profilesFailure(e));
        }
    }
}
