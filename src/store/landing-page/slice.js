import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  approvalRequesters: [],
  successMessage: "",
  appImages: [],
  successMechanic: "",
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
    getAllMechanicsSuccess: (state, action) => {
      state.allMechanics = action.payload;
    },
    getAllMechanicsFailure: (state, action) => {
      state.failureMessage = action.payload;
    },
    successPostMechanic: (state, action) => {
      state.successMechanic = action.payload;
    },
  },
});

export const {
  fetchapprovalRequesterSuccess,
  postImageSuccess,
  postImageFailure,
  getAppImages,
  getAllMechanicsSuccess,
  getAllMechanicsFailure,
  successPostMechanic,
} = landingPageSlice.actions;
export default landingPageSlice.reducer;
