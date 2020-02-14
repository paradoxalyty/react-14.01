import { createActions } from "redux-actions";

export const { loadChats, addChat, addMessage, fire, unfire, chatRequest, chatSuccess, chatFailure } = createActions({
	LOAD_CHATS: () => ({}),
	ADD_CHAT: (name) => ({ name }),
	ADD_MESSAGE: (id, name, text) => ({ id, name, text }),
	FIRE: (id) => ({ id }),
	UNFIRE: (id) => ({ id }),
	CHAT_REQUEST: () => ({}),
	CHAT_SUCCESS: data => data,
	CHAT_FAILURE: error => error
});