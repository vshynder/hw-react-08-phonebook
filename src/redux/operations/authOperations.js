import actions from "../actions";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registerUser = (userData) => (dispatch) => {
  dispatch(actions.registerRequest());

  const { name, email, password } = userData;

  axios
    .post("/users/signup", { name, email, password })
    .then((response) => {
      token.set(response.data.token);
      dispatch(actions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(actions.registerError(error)));
};

const loginUser = (userData) => (dispatch) => {
  dispatch(actions.loginRequest());

  const { email, password } = userData;

  axios
    .post("/users/login", { email, password })
    .then((response) => {
      token.set(response.data.token);
      dispatch(actions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(actions.loginError(error)));
};

const logOutUser = () => (dispatch) => {
  dispatch(actions.logOutRequest());

  axios
    .post("users/logout")
    .then((response) => {
      token.unset();
      dispatch(actions.logOutSuccess(response.data));
    })
    .catch((error) => dispatch(actions.logOutError(error)));
};

export default {
  registerUser,
  loginUser,
  logOutUser,
};
