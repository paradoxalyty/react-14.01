import { createActions } from 'redux-actions';

export const {loadChats, addChat, addMessage, fire, unfire} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (name, id) => ({name, id}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    fire: (id) => ({id}),
    unfire: (id) => ({id}),
});