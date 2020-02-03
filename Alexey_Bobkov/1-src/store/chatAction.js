import { createActions } from 'redux-action'

export const { loadChats, addMessage } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
});