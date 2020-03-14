import {handleActions} from 'redux-actions';
import {addChat, addMessage, fire, unfire} from './chatAction';
import {CHATS_REQUEST, CHATS_SUCCESS} from "./apiChatAction";

const defaultState = {
    chats: {},
    isLoading: false,
};

export default handleActions({
    [CHATS_REQUEST]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [CHATS_SUCCESS]: (state, {payload}) => {
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