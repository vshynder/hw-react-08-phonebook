import actions from "../actions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((response) => {
      dispatch(actions.fetchContactsSuccess(response.data));
    })
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then((response) => dispatch(actions.addContactSuccess(response.data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(actions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then((response) => dispatch(actions.removeContactSuccess(id)))
    .catch((error) => dispatch(actions.removeContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  removeContact,
};
