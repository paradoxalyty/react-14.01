import {handleActions} from 'redux-actions';
import {loadChats, addMessage, chatStatus, loadChatsfailure, loadChatsRequest, loadChatsSuccess} from './chatActions'

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadChatsRequest]: (state) => {
        return {
            ...state,
            chatsLoading: true
        }
    },
    [loadChatsSuccess]: (state, {payload}) => {
        return {
            ...state,
            chats: payload,
            chatsLoading: false,
            chatsLoadError: null
        }
    },
    [loadChatsfailure]: (state, {payload}) => {
        console.log(payload)
        return {
            ...state,
            chatsLoading: false,
            chatsLoadError: payload,
            chats: {}
        }
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
        }
    },
    [chatStatus]: (state, {payload: {id, is_active}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    is_active: is_active, 
                    messages: [
                        ...state.chats[id].messages
                    ]
                },
            }
        }
    }

}, defaultState);