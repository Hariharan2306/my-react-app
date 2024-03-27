import { configureStore } from "@reduxjs/toolkit";
import businessRole from "../store/landing-page/slice";

export const store = configureStore({
  reducer: {
    BusinessRole: businessRole,
  },
});

// Define RootState type
export const RootState = store.getState();
// Define AppThunk type
export const AppThunk = (dispatch, getState) => {
  return (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    // If action is not a function, just dispatch it
    return dispatch(action);
  };
};

export const AppDispatch = store.dispatch;
