import { createActions } from 'redux-actions'

export const { loadChats, addMessage, loadProfile } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    LOAD_PROFILE: (name, discription) => ({ name, discription }),
});