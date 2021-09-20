import { COUNT_PLUS, COUNT_MINUS } from "./actionString";

export const countPlusAction = () => {
  return {
    type: COUNT_PLUS,
  };
};

export const countMinusAction = () => {
  return {
    type: COUNT_MINUS,
  };
};
