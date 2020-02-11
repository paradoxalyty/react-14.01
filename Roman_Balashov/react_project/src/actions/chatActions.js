import { createActions } from "redux-actions";

export const { loadChats, addMessage } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, text) => ({ id, name, text }),
});