import { configureStore } from "@reduxjs/toolkit";
import businessRole from "../store/landing-page/slice";
import login from "../store/userLogin/slice";
import thunk from "redux-thunk";
import landingPageReducer from "../store/landing-page/slice";

const store = configureStore({
  reducer: {
    BusinessRole: businessRole,
    Login: login,
    landingPage: landingPageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
