import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isAuthLoading: false,
  isAuthError: false,
  email: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuthLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        email: payload.email,

      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthLoading: false,
        isAuth: false,
      };
    default:
      return state;
  }
};