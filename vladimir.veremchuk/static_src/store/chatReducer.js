import {handleActions} from 'redux-actions';
import {loadChats, addMessage} from './chatAction.js';

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadChats] : (state) => {
        return {
            ...state,
            chats: {
                1: {
                    name: 'Chat 1',
                    messages: [
                        { name: "ChatBot", content: "Hello! It's ChatBot of room#1!" },
                    ]
                },
                2: {
                    name: 'Chat 2',
                    messages: [
                        { name: "ChatBot", content: "Hello! It's ChatBot of room#2!" },
                    ]
                },
                3: {
                    name: 'Chat 3',
                    messages: [
                        { name: "ChatBot", content: "Hello! It's ChatBot of room#3!" },
                    ]
                }

            }
        }
    },
    [addMessage] : (state, {payload: {id, name, content}}) => {
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
    }
}, defaultState);
