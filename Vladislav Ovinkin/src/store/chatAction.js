import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions

export const {loadChats, addMessage} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
});