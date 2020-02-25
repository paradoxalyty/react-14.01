import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions

export const {loadChats, addChat, addMessage} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (id, name) => ({id, name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
});