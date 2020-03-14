import {createActions} from 'redux-actions';
import {createAction} from 'redux-api-middleware';

export const {addChat, addMessage, fire, unfire, chatsRequest, chatsSuccess, chatsFailure} = createActions({
    // LOAD_CHATS: () => ({}), loadChats
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (err) => (err),
});

// export const chatsRequest = '@@chats/CHATS_REQUEST'
// export const chatsSuccess = '@@chats/CHATS_SUCCESS'
// export const chatsFailure = '@@chats/CHATS_FAILURE'
 
// export const loadChats = () => createAction({
//   endpoint: '/api/chats.json',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   types: [
//     chatsRequest,
//     chatsSuccess,
//     chatsFailure
//   ]
// })

export const loadChats = () => {
    return async (dispatch) => {
        try{
            dispatch(chatsRequest())
            const result = await fetch('/api/chats.json');
            dispatch(chatsSuccess(await result.json()))
        }catch(e){
            dispatch(chatsFailure(e))
        }
    }
}
