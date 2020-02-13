import {createActions} from 'redux-actions';

export const { addChat, addMessage, fire, unfire, chatsRequest, chatsSuccess, chatsFailure} = createActions({
    // LOAD_CHATS: () => ({}), loadChats,
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (error) => (error),
});

export const loadChats = () => {
    return async (dispatch) => {
       try {
            dispatch(chatsRequest())
            const result = await fetch('api/chats.json');
            dispatch(chatsSuccess(await result.json()))
       }catch(e){
            dispatch(chatsFailure(e))
       }
    }
}
