import React, { useEffect } from "react";
import Filter from "../components/Filter";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Alert from "../components/Alert";
import Loader from "../components/Loading";

import { CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import operations from "../redux/operations/contactsOperations";
import selectors from "../redux/contacts-selectors";
import actions from "../redux/actions";

const Contacts = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!props.userName) {
      history.replace("/login");
      return;
    }

    props.loadContacts();
    props.toggleMounted(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!props.userName) {
      history.replace("/login");
      return;
    }
    // eslint-disable-next-line
  }, [props.userName]);

  const handleSubmit = ({ name, number }) => {
    if (name.trim() === "" || number.trim() === "") {
      handleAlert("Name and number must be provided.");
      return;
    }
    const check = props.contacts.find((contact) => contact.name === name);
    check
      ? handleAlert("You already have " + name)
      : props.onFormSubmit(name, number);
  };

  const handleAlert = (message) => {
    props.handleAlertChange(message);
    props.handleAlertVisibility(true);
    setTimeout(() => {
      props.handleAlertVisibility(false);
    }, 3000);
  };

  return (
    <div className="phonebook">
      <CSSTransition
        in={props.isMounted}
        timeout={500}
        classNames="title"
        mountOnEnter
      >
        <h2 className="title">Phonebook</h2>
      </CSSTransition>
      <ContactForm formSubmit={handleSubmit} />
      {props.contacts.length > 1 ? (
        <Filter filterChange={props.handleFilter} filterVal={props.filter} />
      ) : null}

      {props.isLoading && <Loader />}
      <ContactList
        filter={props.filter}
        contacts={props.contacts}
        remove={props.removeContact}
      />
      <Alert isShown={props.isAlertShown} info={props.alertMessage} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMounted: selectors.getIsMounted(state),
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  isAlertShown: selectors.getAlertShown(state),
  alertMessage: selectors.getAlertMessage(state),
  isLoading: selectors.getLoader(state),
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (name, number) =>
      dispatch(operations.addContact({ name, number })),
    removeContact: (id) => dispatch(operations.removeContact(id)),
    toggleMounted: (value) => dispatch(actions.toggleMounted(value)),
    handleFilter: (e) => dispatch(actions.filter(e.target.value)),
    handleAlertChange: (message) =>
      dispatch(actions.toggleAlertMessage(message)),
    handleAlertVisibility: (value) =>
      dispatch(actions.toggleAlertVisibility(value)),
    loadContacts: () => dispatch(operations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
