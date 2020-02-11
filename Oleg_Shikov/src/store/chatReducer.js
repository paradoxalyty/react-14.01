import {handleActions} from 'redux-actions';
import {addChat, addMessage, fire, unfire, chatsRequest, chatsSuccess} from './chatAction';

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
    [chatsSuccess]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            chats: payload,
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
        if(!state.chats[id]) return state;
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