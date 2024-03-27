import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: "",
};

const DriversSlice = createSlice({
  name: "Drivers",
  initialState: initialState,
  reducers: {
    fetchDriversRequest: (state) => {
      state.loading = true;
    },
    fetchDriversSuccess: (state, action) => {
      state.Drivers = action.payload;
    },
    fetchDriversFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchDriversRequest, fetchDriversSuccess, fetchDriversFailure } =
  DriversSlice.actions;
export default DriversSlice.reducer;
