import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
                `I am Robot and it is Chat # ${action.chatId}`, 'bot', action.chatId)), 1000)
            }
    }
    return next(action)
 }
 
