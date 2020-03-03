import { createActions } from "redux-actions";

export const {
  loadChats,
  addMessage,
  addChat,
  deleteChat,
  highlightChat
} = createActions({
  LOAD_CHATS: () => ({}),
  ADD_MESSAGE: (id, name, content) => ({ id, name, content }),
  ADD_CHAT: (name, chatId) => ({ name, chatId }),
  DELETE_CHAT: chatId => ({ chatId }),
  HIGHLIGHT_CHAT: chatId => ({ chatId })
});
