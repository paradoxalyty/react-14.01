import { addMessage, chatStatus } from "./chatActions";
import { ROBOT_NAME } from '../containers/App'

export default store => next => (action) => {
   switch (action.type) {
      case addMessage.toString():
         next(action)
         if (action.payload.name != ROBOT_NAME) {
            store.dispatch(addMessage(action.payload.id, ROBOT_NAME, "Hi, I'm robot!"))
            store.dispatch(chatStatus(action.payload.id, true))

            setTimeout(()=>store.dispatch(chatStatus(action.payload.id, false)), 1000)
         }
         break;
         default:
            next(action)
   }
  
}
