import { addMessage, addUnread, deleteUnread } from '../store/chatAction';

export default store => next => action => {

    if (action.type == addMessage.toString()) {
        next(action);
        const { id } = action.payload;

        if (store.getState().router.location.pathname !== '/chats/' + id) {
            store.dispatch(addUnread(id))
        }
    } else if (action.type == '@@router/LOCATION_CHANGE') {
        next(action);
        const id = action.payload.location.pathname.split('/')[2];
        store.dispatch(deleteUnread(id))
    } else {
        next(action);
    }
}