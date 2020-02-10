import { addChat, addMessage, fire, unfire } from "../actions/chatActions";
import { push } from "connected-react-router";

export default store => next => action => {
    // if (action.type === addChat.toString()) {
    // } else {
    //     next(action);
    // }
    switch (action.type) {
        case (addChat.toString()):
            {
                console.log(action);
                next(action);
                store.dispatch(push('/chats/' + action.payload.name))
                break;
            }
        case (addMessage.toString()):
            {
                next(action);
                const { id, name } = action.payload;
                if (store.getState().router.location.pathname !== "/chats/" + id) {
                    store.dispatch(fire(id));
                }
                break;
            }
        case ("@@router/LOCATION_CHANGE"):
            {
                next(action);
                const id = action.payload.location.pathname.split('/')[2];
                store.dispatch(unfire(id));
                break;
            }
        default: {
            next(action);
            break;
        }
    }
}