import { combineReducers, createStore } from "redux";

import { authReducer } from "./auth/reducers";
import { logIn } from "./auth/actions";

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = createStore(rootReducer);

const storedJwt = localStorage.getItem("jwt");
if (storedJwt) {
  store.dispatch(logIn(storedJwt));
}

window.addEventListener("beforeunload", () => {
  const { jwt, loggedIn } = store.getState().auth;
  if (loggedIn) {
    localStorage.setItem("jwt", jwt);
  } else {
    localStorage.removeItem("jwt");
  }
});

export type AppState = ReturnType<typeof rootReducer>;
