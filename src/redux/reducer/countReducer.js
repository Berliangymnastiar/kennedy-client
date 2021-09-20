import { COUNT_PLUS, COUNT_MINUS } from "../action/actionString";

const initialState = {
  number: 1,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PLUS:
      return {
        ...state,
        number: state.number + 1,
      };
    case COUNT_MINUS:
      if (state.number > 1)
        return {
          ...state,
          number: state.number - 1,
        };
      else return state;
    default:
      return state;
  }
};

export default countReducer;
