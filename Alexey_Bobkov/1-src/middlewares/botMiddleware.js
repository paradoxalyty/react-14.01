import { addMessage } from '../store/chatAction'




export default store => next => action => {


    if (action.type === addMessage.toString() && action.payload.name !== 'Robot') {

        console.log(action.timerBot);
        const { id, name } = action.payload;
        action.timerBot = setTimeout(() => store.dispatch(addMessage(id, 'Robot', 'dont touch me ' + name + '! (Chat ' + id + ')')), 3000)

    }
    next(action);
}