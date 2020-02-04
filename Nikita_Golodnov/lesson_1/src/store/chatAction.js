import {createActions} from "redux-actions"

export const {loadChats, addMessage} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, text, content) => ({id, text, content})
})