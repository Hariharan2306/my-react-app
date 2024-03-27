import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginRequestSuccess: (state, action) => {
      state.login = action.payload;
    },
    loginRequestFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginRequestSuccess, loginRequestFailure } =
  loginSlice.actions;

export default loginSlice.reducer;
