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
                        {name: 'Ivan', content: 'Hello from chat one!'},
                        {name: 'Oleg', content: 'Hi! chat one'},
                        {name: 'Ivan', content: 'Chat 1 is fine!'}
                    ],
                },
                2: {
                    name: 'Chat 2', 
                    messages: [
                        {name: 'Den', content: 'It\'s chat2!'},
                        {name: 'Valera', content: 'Chat2-Chat2-Chat2!'},
                        {name: 'Den', content: 'Yes!'}
                    ],
                },
                3: {
                    name: 'Chat 3', 
                    messages: [
                        {name: 'Nobody', content: 'Is anybody in chat3?!'},
                    ],
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
    }
}, defaultState);