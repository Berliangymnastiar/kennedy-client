// import axios from "axios";
// import { Redirect } from "react-router";
// import { onLogin } from "../../utils/Auth";

import { onLogin } from "../../utils/Auth";
import { LOGIN, LOGOUT } from "./actionString";

// export const setForm = (formType, formValue) => {
//   return { type: "LOGIN", formType, formValue };
// };

export const loginAction = (body, history) => (dispatch) => {
  // const data = {
  //   email: form.email,
  //   password: form.password,
  // };

  // let data = []

  onLogin(body)
    .then((result) => {
      // if (result) {
      //   localStorage.setItem("token", result.data.result.token);
      //   localStorage.setItem(
      //     "userInfo",
      //     JSON.stringify(result.data.result.userInfo)
      //   );
      // }
      dispatch({
        type: LOGIN,
        payload: result.data.result,
      });
      history.push("/");
    })
    .catch((err) => console.log(err.message));
};

export const logoutAction = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: "",
  });
  history.push("/");
};
