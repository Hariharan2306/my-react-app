import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: "",
};

const DriversSlice = createSlice({
  name: "Drivers",
  initialState: initialState,
  reducers: {
    postDriversRequest: (state) => {
      state.loading = true;
    },
    postDriversSuccess: (state, action) => {
      state.Drivers = action.payload;
    },
    postDriversFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchDriversRequest, fetchDriversSuccess, fetchDriversFailure } =
  DriversSlice.actions;
export default DriversSlice.reducer;
