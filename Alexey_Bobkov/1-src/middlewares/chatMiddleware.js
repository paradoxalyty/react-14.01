import { addChat, deleteChat } from '../store/chatAction';
import { push } from 'connected-react-router';



export default store => next => action => {

    if (action.type == deleteChat.toString()) {
        next(action);
        store.dispatch(push(`/chats`));

    }

    if (action.type == addChat.toString()) {
        next(action);
        store.dispatch(push('/chats/' + action.payload.id));
    } else {
        next(action);

    }
}
