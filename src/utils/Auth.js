import axios from "axios";

export const onLogin = (data) => {
  const url = process.env.REACT_APP_BASE_URL + "/auth/login";
  return axios.post(url, data);
};
