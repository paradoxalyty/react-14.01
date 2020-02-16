import { handleActions } from 'redux-actions';
import { loadChats, addMessage, addChat, deleteChat, addUnread, deleteUnread } from "./chatAction.js";

const defaultState = {
    chats: {

    }
};
export default handleActions({
    [loadChats]: (state) => {
        return {
            ...state,
            chats: {
                1: {
                    name: 'Chat 1',
                    unread: false,
                    messages: [{
                        name: 'Name1',
                        content: 'Text1'
                    }],
                },
                2: {
                    name: 'Chat 2',
                    unread: false,
                    messages: [{
                        name: 'Name2',
                        content: 'Text2'
                    }]
                },
                3: {
                    name: 'Chat 3',
                    unread: false,
                    messages: [{
                        name: 'Name3',
                        content: 'Text3'
                    }]
                },
                4: {
                    name: 'Chat 4',
                    unread: false,
                    messages: [{
                        name: 'Name4',
                        content: 'Text4'
                    }]
                },
                5: {
                    name: 'Chat 5',
                    unread: false,
                    messages: [{
                        name: 'Name5',
                        content: 'Text5'
                    }]
                }

            }
        }
    },
    [addChat]: (state, { payload: { name } }) => {
        const chatId = Object.keys(state.chats).length + 1;
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
    // [deleteChat]: (state, { payload: { name } }) => {

    // },

    [addUnread]: (state, {
        payload: { id } }) => {
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
        payload: { id } }) => {
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
}, defaultState);