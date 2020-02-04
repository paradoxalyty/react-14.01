import {createActions} from "redux-actions";

export const {loadChats, addMessage} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, msgClass, name, message, time) => ({id, msgClass, name, message, time}),
});