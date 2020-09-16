import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("register/request");
const registerSuccess = createAction("register/success");
const registerError = createAction("register/error");

const loginRequest = createAction("login/request");
const loginSuccess = createAction("login/success");
const loginError = createAction("login/error");

const logOutRequest = createAction("logOut/request");
const logOutSuccess = createAction("logOut/success");
const logOutError = createAction("logOut/error");

const fetchContactsRequest = createAction("fetchContacts/request");
const fetchContactsSuccess = createAction("fetchContacts/success");
const fetchContactsError = createAction("fetchContacts/error");

const addContactRequest = createAction("addContact/request");
const addContactSuccess = createAction("addContact/success");
const addContactError = createAction("addContact/error");

const removeContactRequest = createAction("removeContact/request");
const removeContactSuccess = createAction("removeContact/success");
const removeContactError = createAction("removeContact/error");

const filter = createAction("FILTER", (value) => {
  return {
    payload: {
      value,
    },
  };
});

const toggleMounted = createAction("TOGGLE_MOUNTED", (value) => {
  return {
    payload: {
      value,
    },
  };
});
const toggleAlertVisibility = createAction(
  "TOGGLE_ALERT_VISIBILITY",
  (value) => {
    return {
      payload: {
        value,
      },
    };
  }
);

const toggleAlertMessage = createAction("TOGGLE_ALERT_MESSAGE", (value) => {
  return {
    payload: {
      value,
    },
  };
});

export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  logOutRequest,
  logOutSuccess,
  logOutError,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  removeContactRequest,
  removeContactSuccess,
  removeContactError,

  filter,
  toggleMounted,
  toggleAlertVisibility,
  toggleAlertMessage,
};
