import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usLogin: "",
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initialState,
  reducers: {
    successLogin: (state, action) => {
      state.usLogin = action.payload;
    },
    failureLogin: (state, action) => {
      state.usLogin = action.payload;
    },
  },
});

export const { successLogin, failureLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
