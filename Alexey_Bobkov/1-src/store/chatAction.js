import { createActions } from 'redux-actions'

export const { addMessage, addChat, deleteChat, addUnread, deleteUnread, chatsRequest, chatsSuccess, chatsFailure } = createActions({
    //LOAD_CHATS: () => ({}), loadChats,
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_CHAT: (id, name) => ({ id, name }),
    DELETE_CHAT: (id, name) => ({ id, name }),
    DELETE_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_UNREAD: (id) => ({ id }),
    DELETE_UNREAD: (id) => ({ id }),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (error) => (error),
});


export const loadChats = () => {

    return async (dispatch) => {
        try {
            dispatch(chatsRequest())
            const result = await fetch('/api/chats.json');
            dispatch(chatsSuccess(await result.json()))
        } catch (e) {
            dispatch(chatsFailure(e))
        }
    }
}