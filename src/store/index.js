import { configureStore } from "@reduxjs/toolkit";
import businessRole from "../store/landing-page/slice";
import login from "../store/userLogin/slice";
import thunk from "redux-thunk";
import landingPageReducer from "../store/landing-page/slice";
import allDriversReducer from "../API/Drivers/slice";

const store = configureStore({
  reducer: {
    BusinessRole: businessRole,
    Login: login,
    landingPage: landingPageReducer,
    allDrivers: allDriversReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
