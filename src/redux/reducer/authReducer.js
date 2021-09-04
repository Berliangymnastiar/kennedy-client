const initialState = {
  form: {
    email: "",
    password: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
