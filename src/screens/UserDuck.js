const initialState = {
  user: null,
  isLoggedIn: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return { ...state, isLoggedIn: true, user: action.payload };
    case "USER_LOGOUT":
      return { ...state, isLoggedIn: false, user: action.payload };
    default:
      return state;
  }
};
export default userReducer;
