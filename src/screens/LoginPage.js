import React, { useState } from "react";
import { connect } from "react-redux";

import authOperations from "../redux/operations/authOperations";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onLogin: (cred) => dispatch(authOperations.loginUser(cred)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
