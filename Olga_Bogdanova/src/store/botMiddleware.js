import {addMessage} from './chatAction';
//чатмидл 
// export default function botMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       console.log(action.type);
//       next(action);
      
//     }
//   }
//вызыывает следующий Middleware
// }
const timers = {};
export default store => next => action => {
    if(action.type === addMessage.toString() && action.payload.name !== 'Robot'){
        const {id, name} = action.payload;
        clearTimeout(timers[id]);
        timers[id] = setTimeout(() => store.dispatch(addMessage(id, 'Robot', `hello, ${name}, iam robot`)), 3000);
    }
    next(action);
};