import { addChat } from './chatAction';
import { push } from 'connected-react-router';

export default store => next => action => {
    next (action);
    if (action.type === addChat.toString ()) {
        store.dispatch (push('/chats/' + action.payload.id));
    }
}