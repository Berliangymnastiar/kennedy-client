import { combineReducers } from "redux";
import vehicleReducer from "./vehicleReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  vehicleReducer,
  authReducer,
});

export default reducers;
