import { createActions } from 'redux-actions'

export const { loadChats, addMessage, loadProfile, addChat } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    ADD_CHAT: (name) => ({ name }),
    LOAD_PROFILE: (name, discription) => ({ name, discription }),
});