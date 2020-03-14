import { createAction } from 'redux-api-middleware'


export const loadProfileRequest = '@@profile/PROFILE_LOAD_REQUEST';
export const loadProfileSuccess = '@@profile/PROFILE_LOAD_SUCCESS';
export const loadProfilefailure = '@@profile/PROFILE_LOAD_FAILURE';


export const loadProfile = () => createAction({
    endpoint: '/api/user.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        loadProfileRequest,
        loadProfileSuccess,
        loadProfilefailure
    ]
})
