import { addMessage, highlightChat } from "./chatAction";

export default store => next => action => {
  if (
    action.type === addMessage.toString() &&
    action.payload.name !== "Робот"
  ) {
    const { id, name } = action.payload;
    setTimeout(
      () => store.dispatch(addMessage(id, "Робот", "Привет! Я робот.")),
      500
    );
  } else if (
    action.type === addMessage.toString() &&
    action.payload.name === "Робот"
  ) {
    const { id } = action.payload;
    store.dispatch(highlightChat(id));
    setTimeout(() => store.dispatch(highlightChat(0)), 500);
  }
  next(action);
};
