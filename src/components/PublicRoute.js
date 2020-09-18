import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import selectors from "../redux/contacts-selectors";

const PublicRoute = ({
  component: Component,
  isLoggedIn,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isLoggedIn && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);
const mapStateToProps = (state) => ({
  isLoggedIn: selectors.getUserName(state),
});

export default connect(mapStateToProps)(PublicRoute);
