import React from "react";
import UserMenu from "./UserMenu";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import selectors from "../redux/contacts-selectors";

function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink className="navbar__link" to="/login">
        <span className="navbar__var"> Login</span>
      </NavLink>
      <NavLink className="navbar__link" to="/register">
        <span className="navbar__var"> Register</span>
      </NavLink>
      <NavLink className="navbar__link" to="/contacts">
        <span className="navbar__var"> Contacts</span>
      </NavLink>
      {props.userName && <UserMenu name={props.userName} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: selectors.getUserName(state),
});

export default connect(mapStateToProps)(Navbar);
