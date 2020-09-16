import { combineReducers } from "redux";

import { contactReducer, loading } from "./contactReducer";
import { filterReducer } from "./filterReducer";
import { mountedReducer } from "./mountedReducer";
import { alertShownReducer } from "./alertShownReducer";
import { alertMessageReducer } from "./alertMessageReducer";
import { authReducer } from "./authReducers";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  isMounted: mountedReducer,
  isAlertShown: alertShownReducer,
  alertMessage: alertMessageReducer,
  isLoading: loading,
  user: authReducer,
});

export default rootReducer;
