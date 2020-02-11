import {createActions} from 'redux-actions';

export const {loadChats, addMessage, chatStatus} = createActions({
    LOAD_CHATS: () => ({
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {name: "Ivan", content: "Hello! It's chat one!"},
                    {name: "Ivan", content: "How are you?"},
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {name: "Den", content: "Hi from chat 2"},
                ]
            },
            3: {
                name: 'Chat 3',
                messages: []
            }
        },
    }),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    CHAT_STATUS: (id, is_active) => ({id, is_active}),
});

