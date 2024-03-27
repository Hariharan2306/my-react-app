import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  approvalRequesters: [],
  successMessage: "",
  appImages: [],
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
    getAppImages: (state, action) => {
      state.appImages = action.payload;
    },
  },
});

export const {
  fetchapprovalRequesterSuccess,
  postImageSuccess,
  postImageFailure,
  getAppImages,
} = landingPageSlice.actions;
export default landingPageSlice.reducer;
