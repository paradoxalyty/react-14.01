import { handleActions } from 'redux-actions';
import { addMessage, addChat, deleteChat, addUnread, deleteUnread, chatsRequest, chatsSuccess } from "./chatAction.js";

const defaultState = {
    chats: {},
    isLoading: false,
};
export default handleActions({
    [chatsRequest]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [chatsSuccess]: (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            chats: payload,
        };
    },
    [addChat]: (state, { payload: { id, name } }) => {
        console.log(id, name);
        const chatId = id
        return {
            ...state,
            chats: {
                ...state.chats,
                [chatId]: {
                    name: name,
                    unread: false,
                    messages: []
                },
            }
        }
    },



    [addUnread]: (state, {
        payload: { id }
    }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true,

                },
            }
        };

    },
    [deleteUnread]: (state, {
        payload: { id }
    }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false,

                },
            }
        };

    },


    [addMessage]: (state, {
        payload: {
            id,
            name,
            content
        }
    }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages, {
                        name,
                        content
                    }]
                }
            }
        }

    },
    [deleteChat]: (state, { payload: { id } }) => {
        const delChat = { ...state.chats };
        delete delChat[id];
        return {
            ...state,
            chats: delChat,
        }
    },
}, defaultState);