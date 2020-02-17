import { addMessage } from '../store/chatAction'

const timerBots = {}

export default store => next => action => {

    if (action.type === addMessage.toString() && action.payload.name !== 'Robot') {

        const { id, name } = action.payload;
        clearTimeout(timerBots[id]);
        timerBots[id] = setTimeout(() => store.dispatch(addMessage(id, 'Robot', 'dont touch me ' + name + '! (Chat ' + id + ')')), 3000)
    };

    next(action);
}