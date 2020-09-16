import React from "react";
import { connect } from "react-redux";

import authOperations from "../redux/operations/authOperations";

function UserMenu({ name, onExit }) {
  return (
    <div>
      Hello {name}!<button onClick={onExit}>Exit</button>
    </div>
  );
}

export default connect(null, { onExit: authOperations.logOutUser })(UserMenu);
