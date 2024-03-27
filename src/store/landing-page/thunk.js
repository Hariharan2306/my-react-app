import api from "../../api";
import {
  fetchapprovalRequesterSuccess,
  getAppImages,
  postImageFailure,
  postImageSuccess,
} from "./slice";

export const fetchApprovalRequesterData =
  (pageSize, id, pageNumber) => async (dispatch) => {
    try {
      const response = await api.get(`/access-approval`);
      if (response.status === 200) {
        dispatch(fetchapprovalRequesterSuccess(response.data.data));
        return response.data.data;
      }
    } catch (error) {
      dispatch(fetchapprovalRequesterSuccess(error));
    }
  };

export const postImage = (data) => async (dispatch) => {
  try {
    const response = await api.post(`/access-approval/upload-image`, data);
    if (response.status === 200) {
      dispatch(postImageSuccess(response.data.flag));
    }
  } catch (error) {
    dispatch(postImageFailure(error));
  }
};

export const getImages = () => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/access-approval/get-image`);
      if (response.status === 200) {
        dispatch(getAppImages(response.data.data));
      }
    } catch (error) {
      dispatch(postImageFailure(error));
    }
  };
};
