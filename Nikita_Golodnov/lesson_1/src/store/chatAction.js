import {createActions} from 'redux-actions'

export const {loadChats, addMessage, addChat} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, text, content) => ({id, text, content}),
    ADD_CHAT: (name) => ({name}) 
})