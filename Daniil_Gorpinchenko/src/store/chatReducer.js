import {handleActions} from 'redux-actions';
import {loadChats, addChat, addMessage, fire, unfire} from './chatAction';

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadChats]: (state) => {
        return {
            ...state,
            chats: {
                1: {
                    name: 'Chat 1',
                    unread: false,
                    messages: [
                        { name: 'Ivan', content: 'Hello! It\'s chat one!' },
                        { name: 'Ivan', content: 'How are you?' },
                    ]
                },
                2: {
                    name: 'Chat 2',
                    unread: false,
                    messages: [
                        { name: 'Den', content: 'Hi from chat 2' },
                    ]
                },
                3: {
                    name: 'Chat 3',
                    unread: false,
                    messages: []
                }
            }
        };
    },
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                },
            }
        };
    },
    [addChat]: (state, {payload: {name}}) => {
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
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true
                },
            }
        };
    },
    [unfire]: (state, {payload: {id}}) => {
        if (!state.chats[id]) return state;
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false
                },
            }
        };
    },
}, defaultState);
