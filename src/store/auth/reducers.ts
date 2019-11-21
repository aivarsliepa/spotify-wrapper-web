import { AuthState, AuthActionTypes, LOG_IN, LOG_OUT } from "./types";
import { Reducer } from "redux";

const initialState: AuthState = {
  jwt: "",
  loggedIn: false
};

export const authReducer: Reducer<AuthState, AuthActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, jwt: action.payload, loggedIn: true };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};
