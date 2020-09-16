import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = { name: null, email: null, token: null };

export const authReducer = createReducer(initialState, {
  [actions.registerSuccess]: (state, action) => ({
    name: action.payload.user.name,
    email: action.payload.user.email,
    token: action.payload.token,
  }),
  [actions.loginSuccess]: (state, action) => ({
    name: action.payload.user.name,
    email: action.payload.user.email,
    token: action.payload.token,
  }),
  [actions.logOutSuccess]: () => ({ name: null, email: null, token: null }),
});
