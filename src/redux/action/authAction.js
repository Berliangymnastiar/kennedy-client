// import axios from "axios";
// import { Redirect } from "react-router";
// import { onLogin } from "../../utils/Auth";

import { onLogin } from "../../utils/Auth";
import { LOGIN, LOGOUT } from "./actionString";

// export const setForm = (formType, formValue) => {
//   return { type: "LOGIN", formType, formValue };
// };

export const loginAction = (body, history) => (dispatch) => {
  onLogin(body)
    .then((result) => {
      dispatch({
        type: LOGIN,
        payload: result.data.result,
      });
      history.push("/");
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: LOGIN,
        payload: err.message,
      });
    });
};

export const logoutAction = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: "",
  });
  history.push("/");
};
