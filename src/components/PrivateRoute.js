import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import selectors from "../redux/contacts-selectors";

const PrivateRoute = ({ component: Component, isLoggedIn, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);
const mapStateToProps = (state) => ({
  isLoggedIn: selectors.getUserName(state),
});

export default connect(mapStateToProps)(PrivateRoute);
