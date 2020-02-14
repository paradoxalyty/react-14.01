import { handleActions } from 'redux-actions';
import { loadChats, addMessage, addChat } from "./chatAction.js";

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
                    messages: [{
                        name: 'Name1',
                        content: 'Text1'
                    }],
                },
                2: {
                    name: 'Chat 2',
                    messages: [{
                        name: 'Name2',
                        content: 'Text2'
                    }]
                },
                3: {
                    name: 'Chat 3',
                    messages: [{
                        name: 'Name3',
                        content: 'Text3'
                    }]
                },
                4: {
                    name: 'Chat 4',
                    messages: [{
                        name: 'Name4',
                        content: 'Text4'
                    }]
                },
                5: {
                    name: 'Chat 5',
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
                    messages: []
                },
            }
        }
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

    }
}, defaultState);