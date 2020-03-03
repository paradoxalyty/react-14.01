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
                    number: 1,
                    name: 'Chat 1',
                    messages: [
                        {name: "Robot", content: "Hello!"},
                        {name: "Robot", content: "It's chat one."},
                        {name: "Robot", content: "Hi, how are You?"}
                    ]
                },
                2: {
                    number: 2,
                    name: 'Chat 2',
                    messages: [
                        {name: "Robot", content: "Hi!"},
                        {name: "Robot", content: "It's chat two"}
                    ]
                },
                3: {
                    number: 3,
                    name: 'Chat 3',
                    messages: []
                }
            }
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
}, defaultState);