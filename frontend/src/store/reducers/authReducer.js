import { authActions } from "../actions/authActions";

const initState = {
  userDetails: JSON.parse(localStorage.getItem("user")),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
