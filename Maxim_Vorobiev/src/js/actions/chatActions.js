// From video lesson
// import {createActions} from 'redux-actions';

// export const {loadChats, addMessage} = createActions({
//     LOAD_CHATS: () => ({}),
//     ADD_MESSAGE: (chatId, name, content) => ({
//         chatId: chatId,
//         name: name,
//         content: content,
//     }),
// });



export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});