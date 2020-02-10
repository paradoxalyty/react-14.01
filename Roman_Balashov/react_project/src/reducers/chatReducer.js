import { handleActions } from "redux-actions";
import { loadChats, addMessage, addChat, fire, unfire } from "../actions/chatActions";

const defaultState = {
    chats: {},
};

export default handleActions({
    [loadChats]: (state) => {
        return {
            ...state,
            chats: {
                1: {
                    id: 1,
                    name: "Chat 1",
                    messages: [
                        { name: "Jane", text: "Hi!" },
                        { name: "Jane", text: "How are you?" }
                    ],
                },
                2: {
                    id: 2,
                    name: "Chat 2",
                    messages: [
                        { name: "Jack", text: "Hey" },
                    ]
                },
                3: {
                    id: 3,
                    name: "Chat 3",
                    messages: [
                        { name: "John", text: "What's up!" },],
                }
            }
        }
    },
    [addMessage]: (state, { payload: { id, name, text } }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        { name, text },
                    ]

                }
            }
        }
    },
    [addChat]: (state, { payload: { name } }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [name]: {
                    name: name,
                    messages: []
                },
            }
        };
    },
    [fire]: (state, { payload: { id } }) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true,
                }
            }
        };
    },
    [unfire]: (state, { payload: { id } }) => {
        if(!state.chats[id]) return state;
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false,
                }
            }
        };
    },
}, defaultState);