import { handleActions } from "redux-actions";
import { addMessage, addChat, fire, unfire, chatRequest, chatSuccess, chatFailure } from "../actions/chatActions";

const defaultState = {
	chats: {},
};

export default handleActions({
	[addMessage]: (state, { payload: { id, name, text } }) => {
		return {
			...state,
			chats: {
				...state.chats,
				[id]: {
					name: state.chats[id].name,
					messages: [
						...state.chats[id].messages,
						{ name, text },
					]

				}
			}
		};
	},
	[addChat]: (state, { payload: { name } }) => {
		return {
			...state,
			chats: {
				...state.chats,
				[name]: {
					name: name,
					messages: []
				},
			}
		};
	},
	[fire]: (state, { payload: { id } }) => {
		return {
			...state,
			chats: {
				...state.chats,
				[id]: {
					name: state.chats[id].name,
					messages: state.chats[id].messages,
					unread: true,
				}
			}
		};
	},
	[unfire]: (state, { payload: { id } }) => {
		if (!state.chats[id]) return state;
		return {
			...state,
			chats: {
				...state.chats,
				[id]: {
					name: state.chats[id].name,
					messages: state.chats[id].messages,
					unread: false,
				}
			}
		};
	},
	[chatRequest]: state => {
		return {
			...state,
			isLoading: true
		};
	},
	[chatSuccess]: (state, { payload }) => {
		return {
			...state,
			isLoading: false,
			chats: payload
		};
	},
	[chatFailure]: state => {
		return {
			...state,
			isLoading: false
		};
	}
}, defaultState);