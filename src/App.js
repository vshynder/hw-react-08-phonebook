import React from "react";

import NavBar from "./components/NavBar";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Contacts from "./screens/ContactsPage";
import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";

import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
