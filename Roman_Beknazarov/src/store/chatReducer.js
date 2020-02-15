import {handleActions} from 'redux-actions';
import {loadChats, addChat, addMessage} from './chatAction';

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
                    messages: [
                        {name: 'Robot', content: 'Hello!'},
                        {name: 'Robot', content: 'It\'s chat one.'},
                        {name: 'Robot', content: 'Hi, how are You?'}
                    ]
                },
                2: {
                    chatNumber: 2,
                    name: 'Chat 2',
                    messages: [
                        {name: 'Robot', content: 'Hi!'},
                        {name: 'Robot', content: 'It\'s chat two'}
                    ]
                },
                3: {
                    chatNumber: 3,
                    name: 'Chat 3',
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
}, defaultState);