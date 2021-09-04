import axios from "axios";

export const getAllVehicles = (token) => {
  const url = process.env.REACT_APP_BASE_URL + "/vehicles";
  return axios.get(url, {
    headers: {
      "x-access-token": `Bearer ${token}`,
    },
  });
};

export const getVehicleDetail = (token, id) => {
  const url = process.env.REACT_APP_BASE_URL + "/vehicles/" + id;
  return axios.get(url, {
    headers: {
      "x-access-token": `Bearer ${token}`,
    },
  });
};

export const searchVehicle = (token, query) => {
  const url = process.env.REACT_APP_BASE_URL + "/vehicles" + query;
  return axios.get(url, {
    headers: {
      "x-access-token": `Bearer ${token}`,
    },
  });
};
