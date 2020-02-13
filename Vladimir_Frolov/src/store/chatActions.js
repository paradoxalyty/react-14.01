import { createActions } from 'redux-actions';
import { createAction } from 'redux-api-middleware'

export const { addMessage, chatStatus } = createActions({
    // LOAD_CHATS: () => ({
    //     chats: {
    //         1: {
    //             name: 'Chat 1',
    //             messages: [
    //                 {name: "Ivan", content: "Hello! It's chat one!"},
    //                 {name: "Ivan", content: "How are you?"},
    //             ]
    //         },
    //         2: {
    //             name: 'Chat 2',
    //             messages: [
    //                 {name: "Den", content: "Hi from chat 2"},
    //             ]
    //         },
    //         3: {
    //             name: 'Chat 3',
    //             messages: []
    //         }
    //     },
    // }),
    ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
    CHAT_STATUS: (id, is_active) => ({ id, is_active }),
});


export const loadChatsRequest = '@@chat/CHAT_LOAD_REQUEST';
export const loadChatsSuccess = '@@chat/CHAT_LOAD_SUCCESS';
export const loadChatsfailure = '@@chat/CHAT_LOAD_FAILURE';


export const loadChats = () => createAction({
    endpoint: '/api/messages.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        loadChatsRequest,
        loadChatsSuccess,
        loadChatsfailure
    ]
})