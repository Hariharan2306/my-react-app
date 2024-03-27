import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: "",
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initialState,
  reducers: {
    successLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    failureLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { successLogin, failureLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;
