import {addMessage} from '../actions/chatActions';

export default store => next => action => {
    if(action.type === addMessage.toString() && action.payload.name !== "Robot") {
        const {id, name} = action.payload;
        setTimeout(() => store.dispatch(addMessage(id, 'Robot', `Hello, ${name}, I'm a robot in chat №${id}`)), 1000);
    }
    next(action);
}