import { handleActions } from "redux-actions";
import {
  loadChats,
  addMessage,
  addChat,
  deleteChat,
  highlightChat
} from "./chatAction";

const defaultState = {
  chats: {}
};

export default handleActions(
  {
    [loadChats]: state => {
      return {
        ...state,
        chats: {
          1: {
            name: "Чат 1",
            messages: [
              { name: "Иван", content: "Привет!" },
              { name: "Петр", content: "Привет, как дела?" },
              { name: "Иван", content: "Хорошо, спасибо." }
            ]
          },
          2: {
            name: "Чат 2",
            messages: [
              { name: "Иван", content: "Привет!" },
              { name: "Иван", content: "Как дела?" }
            ]
          },
          3: {
            name: "Чат 3",
            messages: []
          }
        }
      };
    },
    [addMessage]: (state, { payload: { id, name, content } }) => {
      return {
        ...state,
        chats: {
          ...state.chats,
          [id]: {
            name: state.chats[id].name,
            messages: [...state.chats[id].messages, { name, content }]
          }
        }
      };
    },
    [addChat]: (state, { payload: { name, chatId } }) => {
      return {
        ...state,
        chats: { ...state.chats, [chatId]: { name: name, messages: [] } }
      };
    },
    [deleteChat]: (state, { payload: { chatId } }) => {
      //let chatsFiltred = Object.keys(state.chats).filter(
      //  chat => chat !== chatId
      //);
      //let chatsNew = {};
      //for (let id of chatsFiltred) {
      //  chatsNew = { ...chatsNew, [id]: state.chats[id] };
      //}
      //return { ...state, chats: chatsNew };
      let chats = { ...state.chats };
      delete chats[chatId];
      return { ...state, chats };
      return state.chats.filter(chat => chat[chatId] !== action.payload.id);
    },
    [highlightChat]: (state, { payload: { chatId } }) => {
      return {
        ...state,
        activeChat: chatId
      };
    }
  },
  defaultState
);
