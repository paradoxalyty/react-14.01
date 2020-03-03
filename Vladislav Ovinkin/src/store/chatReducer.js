import {handleActions} from 'redux-actions';
import {loadChats, addChat, addMessage, fire, unfire} from './chatAction';

const defaultState = {
    chats: {}
};

export default handleActions ({
    [loadChats]: (state) => {
        return { 
            ...state,
            chats : {
                1: {
                    name: 'Anna',
                    unread: false,
                    messages: [
                        {name: 'chatBot', content: 'Hello!'},
                        {name: 'Anna', content: 'Hi! How are you?'},
                        {name: 'chatBot', content: 'I am well!'},
                    ],
                },
                2: {
                    name: 'Elena',
                    unread: false,
                    messages: [
                        {name: 'chatBot', content: 'Hello!'},
                        {name: 'Elena', content: 'Hi! It\'s interesting to talking with robot for me)'},
                    ],
                },
                3: {
                    name: 'Olga',
                    unread: false,
                    messages: [],
                },
            },
        };
    },
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages, {name, content}],
                },
            }
        };
    },
    [addChat]: (state, {payload: {id, name}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: name,
                    messages: [],
                },
            }
        };
    },
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages],
                    unread: true,
                },
            }
        };
    },
    [unfire]: (state, {payload: {id}}) => {
        if (!state.chats[id]) return state;
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages],
                    unread: false,
                },
            }
        };
    },
}, defaultState);