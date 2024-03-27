import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  approvalRequesters: [],
  successMessage: "",
};

const landingPageSlice = createSlice({
  name: "ApprovalRequester",
  initialState: initialState,
  reducers: {
    fetchapprovalRequesterSuccess: (state, action) => {
      state.approvalRequesters = action.payload;
    },
    postImageSuccess: (state, action) => {
      state.successMessage = action.payload;
    },
    postImageFailure: (state, action) => {
      state.failureMessage = action.payload;
    },
  },
});

export const {
  fetchapprovalRequesterSuccess,
  postImageSuccess,
  postImageFailure,
} = landingPageSlice.actions;
export default landingPageSlice.reducer;
