import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { SUCCESS_CHATS_LOADING, ADD_CHAT, DELETE_CHAT, HIGHLIGHT_CHAT, UNHIGHLIGHT_CHAT } from "../actions/chatActions";

const initialStore = {
    chats: {},
    isLoading: true,
    chatNewMessages: [],
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {
               chats: { $merge: { [action.chatId]: {
                   title: store.chats[action.chatId].title,
                   messageList: [...store.chats[action.chatId].messageList, action.messageId]
               } } },
           });
       }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;
           return update(store, {
              chats: { $merge: {
                  [chatId]: {
                      title: action.title, messageList: []
              } } },
           });
       }

       case DELETE_CHAT: {
        const chatId = Number(action.chatId);
        return update(store, {
          chats: { $splice: [
              [chatId, 1]
            ] },
        });
      }

       case HIGHLIGHT_CHAT: {
        const chatId = Number(action.chatId);
        return update(store, {
            chatNewMessages: { $set: [...store.chatNewMessages, chatId] }
        });
    }
        case UNHIGHLIGHT_CHAT: {
            const chatId = Number(action.chatId);
            const chatNewMessages = [...store.chatNewMessages];
            delete chatNewMessages[chatNewMessages.indexOf(chatId)];
            return update(store, {
                chatNewMessages: { $set: chatNewMessages }
            });
        }
        case SUCCESS_CHATS_LOADING: {
            return update(store, {
                chats: { $set: action.payload.entities.chats },
                isLoading: { $set: false },
            });
        }
 
       default:
           return store;
   }
}