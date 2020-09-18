import React from "react";

import NavBar from "./components/NavBar";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { connect } from "react-redux";
import operations from "./redux/operations/authOperations";

import ContactsView from "./views/ContactsPageView";
import RegisterPageView from "./views/RegisterPageView";
import LoginPageView from "./views/LoginPageView";

import "./app.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <PrivateRoute path="/contacts" component={ContactsView} />
          <PublicRoute
            restricted={true}
            path="/register"
            component={RegisterPageView}
          />
          <PublicRoute
            restricted={true}
            path="/login"
            component={LoginPageView}
          />
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(operations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
