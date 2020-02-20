import {handleActions} from 'redux-actions';
import {loadChats, addMessage} from './chatAction';

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
                    messages: [
                        {name: "chatBot", content: "Hello!"},
                        {name: "Anna", content: "Hi! How are you?"},
                        {name: "chatBot", content: "I am well!"},
                    ],
                },
                2: {
                    name: 'Elena',
                    messages: [
                        {name: "chatBot", content: "Hello!"},
                        {name: "Elena", content: "Hi! It's interesting to talking with robot for me)"},
                    ],
                },
                3: {
                    name: 'Olga',
                    messages: [],
                },
            },
        }
    },
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { name: state.chats[id].name,
                        messages: [...state.chats[id].messages, {name, content}],
                },
            }
        }
    },
}, defaultState);
