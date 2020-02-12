// From video lesson
// import {handleActions} from 'react-actions';
// import {loadChats, addMessage} from '../actions/chatActions';

// const defaultState = {
//     chats: {}
// };

// export default handleActions({
//     [loadChats]: (state) => {
//         return {
//             ...state,
//             chats: {
//                 1: {title: 'Chat 1', messageList: [1]},
//                 2: {title: 'Chat 2', messageList: [2]},
//                 3: {title: 'Chat 3', messageList: [3]},
//             }
//         }
//     },

//     [addMessage]: (state, {payload: {id, name, content}}) => {
//         return {
//             ...state,
//             chats: {
//                 ...state.chats,
//                 [id]: {
//                     name: state.chats[id].name,
//                     messages: [
//                         ...state.chats[id].messages,
//                         {name, content},
//                     ]
//                 },
//             }
//         }
//     }
// }, defaultState);



import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messageActions';
import {ADD_CHAT} from '../actions/chatActions';

const initialStore = {
    chats: {
        1: {title: 'Chat 1', messageList: [1]},
        2: {title: 'Chat 2', messageList: [2]},
        3: {title: 'Chat 3', messageList: [3]},
    },
};

export const chatReducer = (store = initialStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: {$merge: {[action.chatId]: {
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList, action.messageId]
                }}},
            });
        }

        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;

            return update(store, {
                chats: {$merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                }}},
            });
        }

        default:
            return store;
    }
}