import { UserActionTypes } from "./user.types";

const initial_State = {
  currentUser: null,
};

const userReducer = (state = initial_State, action) => {
  switch (action.type) {
    case UserActionTypes:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
