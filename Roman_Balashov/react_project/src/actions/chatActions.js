import { createActions } from "redux-actions";

export const { addChat, addMessage, fire, unfire, chatRequest, chatSuccess, chatFailure } = createActions({
	ADD_CHAT: (name) => ({ name }),
	ADD_MESSAGE: (id, name, text) => ({ id, name, text }),
	FIRE: (id) => ({ id }),
	UNFIRE: (id) => ({ id }),
	CHAT_REQUEST: () => ({}),
	CHAT_SUCCESS: data => data,
	CHAT_FAILURE: error => error
});

export const loadChats = () => {
	return async (dispatch) => {
		try {
			dispatch(chatRequest());
			const result = await fetch("/api/chats.json");
			dispatch(chatSuccess(await result.json()));
		}
		catch (e) {
			dispatch(chatFailure(e));
		}
	};
};