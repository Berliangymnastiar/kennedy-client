import axios from "axios";
import { Redirect } from "react-router";

export const setForm = (formType, formValue) => {
  return { type: "LOGIN", formType, formValue };
};

export const postLogin = (form) => {
  const data = {
    email: form.email,
    password: form.password,
  };

  axios
    .post("http://localhost:8000/auth/login", data)
    .then((result) => {
      if (result) {
        localStorage.setItem("token", result.data.result.token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(result.data.result.userInfo)
        );
        <Redirect to="/" />;
      }
    })
    .catch((err) => console.log(err.message));
};
