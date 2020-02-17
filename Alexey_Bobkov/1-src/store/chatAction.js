import { createActions } from 'redux-actions'

export const { loadChats, addMessage, loadProfile, addChat, deleteChat, addUnread, deleteUnread } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_CHAT: (name) => ({ name }),
    LOAD_PROFILE: (name, discription) => ({ name, discription }),
    DELETE_CHAT: (name) => ({ name }),
    DELETE_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_UNREAD: (id) => ({ id }),
    DELETE_UNREAD: (id) => ({ id }),
});