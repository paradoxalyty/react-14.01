import {handleActions} from 'redux-actions';
import {loadChats, addMessage} from './chatAction';

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
                    messages: [
                        {author: "Bot", content: "Hello!"},
                        {author: "Bot", content: "It's chat one."},
                        {author: "Bot", content: "Hi, how are You?"}
                    ]
                },
                2: {
                    name: 'Chat 2',
                    messages: [
                        {author: "Robot", content: "Hi!"},
                        {author: "Robot", content: "It's chat two"}
                    ]
                },
                3: {
                    name: 'Chat 3',
                    messages: []
                }
            }
        }
    },
    [addMessage]: (state, {payload: {id, author, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {author, content},
                    ]
                },
            }
        }
    }
}, defaultState);