import { handleActions } from "redux-actions";
import { loadUser } from "./userAction";

const defaultState = {
  user: {}
};

export default handleActions(
  {
    [loadUser]: state => {
      return {
        ...state,
        user: {
          userName: "Анна"
        }
      };
    }
  },
  defaultState
);
