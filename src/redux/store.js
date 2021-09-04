import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer/reducer";

const reduxStore = createStore(reducers, applyMiddleware(thunk));

export default reduxStore;
