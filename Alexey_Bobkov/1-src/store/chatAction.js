import { createActions } from 'redux-actions'

export const { addMessage, loadProfile, addChat, deleteChat, addUnread, deleteUnread, chatsRequest, chatsSuccess, chatsFailure } = createActions({
    //LOAD_CHATS: () => ({}), loadChats,
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_CHAT: (name) => ({ name }),
    LOAD_PROFILE: (name, discription) => ({ name, discription }),
    DELETE_CHAT: (name) => ({ name }),
    DELETE_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_UNREAD: (id) => ({ id }),
    DELETE_UNREAD: (id) => ({ id }),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (error) => (error),
});


export const loadChats = () => {
    return async(dispatch) => {
        try {
            dispatch(chatsRequest())
            const result = await fetch('/api/chats.json');
            dispatch(chatsSuccess(await result.json()))
        } catch (e) {
            dispatch(chatsFailure(e))
        }
    }
}