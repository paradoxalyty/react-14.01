import { createActions } from "redux-actions";

export const { loadChats, addChat, addMessage, fire, unfire } = createActions({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, text) => ({ id, name, text }),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id})
});