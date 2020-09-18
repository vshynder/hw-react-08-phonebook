import { combineReducers } from "redux";

import { contactReducer, loading } from "./contactReducer";
import { filterReducer } from "./filterReducer";
import { mountedReducer } from "./mountedReducer";
import { alertShownReducer } from "./alertShownReducer";
import { alertMessageReducer } from "./alertMessageReducer";
import { authReducer } from "./authReducers";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  isMounted: mountedReducer,
  isAlertShown: alertShownReducer,
  alertMessage: alertMessageReducer,
  isLoading: loading,
  user: persistedReducer,
});

export default rootReducer;
