import { LOGIN, LOGOUT } from "../action/actionString";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {},
  isLogin: localStorage.getItem("userInfo") ? true : false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
      return {
        ...state,
        isLogin: true,
        userInfo: action.payload.userInfo,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      return {
        ...state,
        isLogin: false,
        userInfo: {},
      };
    default:
      return state;
  }
};

export default authReducer;
