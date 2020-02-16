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
                    chatNumber: 1,
                    name: 'Chat 1',
                    unread: false,
                    messages: [
                        {name: 'Robot', content: 'Hello!'},
                        {name: 'Robot', content: 'It\'s chat one.'},
                        {name: 'Robot', content: 'Hi, how are You?'}
                    ]
                },
                2: {
                    chatNumber: 2,
                    name: 'Chat 2',
                    unread: false,
                    messages: [
                        {name: 'Robot', content: 'Hi!'},
                        {name: 'Robot', content: 'It\'s chat two'}
                    ]
                },
                3: {
                    chatNumber: 3,
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
                    chatNumber: state.chats[id].chatNumber,
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                },
            }
        };
    },
    [addChat]: (state, {payload: {name, id}}) => {

        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    chatNumber: id,
                    name: name,
                    messages: []
                }
            }
        };
    },
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    chatNumber: state.chats[id].chatNumber,
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true,
                },
            }
        };
    },
    [unfire]: (state, {payload: {id}}) => {
        if(!state.chats[id]) return state;
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    chatNumber: state.chats[id].chatNumber,
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false,
                },
            }
        };
    },
}, defaultState);