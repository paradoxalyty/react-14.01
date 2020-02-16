import {createAction} from 'redux-api-middleware';

export const CHATS_REQUEST = '@@chats/CHATS_REQUEST';
export const CHATS_SUCCESS = '@@chats/CHATS_SUCCESS';
export const CHATS_FAILURE = '@@chats/CHATS_FAILURE';

export const loadChats = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [
        CHATS_REQUEST,
        CHATS_SUCCESS,
        CHATS_FAILURE
    ]
});