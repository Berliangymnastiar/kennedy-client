import { combineReducers } from "redux";
import vehicleReducer from "./vehicleReducer";
import authReducer from "./authReducer";
import countReducer from "./countReducer";

const reducers = combineReducers({
  vehicleReducer,
  authReducer,
  countReducer,
});

export default reducers;
