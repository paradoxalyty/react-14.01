import {createActions} from 'redux-actions';

export const {loadChats, addChat, addMessage} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
});