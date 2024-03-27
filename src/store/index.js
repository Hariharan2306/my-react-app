import { configureStore } from "@reduxjs/toolkit";
import businessRole from "../store/landing-page/slice";
import login from "../store/userLogin/slice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    BusinessRole: businessRole,
    Login: login,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
