import React, { useState } from "react";
import { connect } from "react-redux";

import authOperations from "../redux/operations/authOperations";

function RegisterPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    props.onRegister({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
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
      <button type="submit">Register</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (cred) => dispatch(authOperations.registerUser(cred)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
