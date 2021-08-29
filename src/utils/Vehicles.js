import axios from "axios";

export const getAllVehicles = (token) => {
  const url = process.env.REACT_APP_BASE_URL + "/vehicles";
  return axios.get(url, {
    headers: {
      "x-access-token": `Bearer ${token}`,
    },
  });
};
