import {addChat} from './chatAction'
import {push} from 'connected-react-router'

export default store => next => action => {
    if (action.type === addChat.toString ()) {
        next (action)
        store.dispatch(push('chats' + action.payload.name))
    } else {
        next (action)
    }
}


