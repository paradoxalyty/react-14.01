import {addMessage} from './chatAction.js';

export default store => next => action => {
    if(action.type === addMessage.toString() && action.payload.name !== 'ChatBot'){
        const {id, name} = action.payload;
        setTimeout(() => store.dispatch(addMessage(id, 'ChatBot',  `Hello, ${name}, I'm a ChatBot in room ${id}`)), 1000);
    }
    next(action);
}; 