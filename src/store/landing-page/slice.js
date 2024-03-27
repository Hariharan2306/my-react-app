import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  approvalRequesters: [],
};

const landingPageSlice = createSlice({
  name: "ApprovalRequester",
  initialState: initialState,
  reducers: {
    fetchapprovalRequesterSuccess: (state, action) => {
      state.approvalRequesters = action.payload;
    },
  },
});

export const { fetchapprovalRequesterSuccess } = landingPageSlice.actions;
export default landingPageSlice.reducer;
