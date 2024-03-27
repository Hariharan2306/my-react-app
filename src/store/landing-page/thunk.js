import api from "../../api";
import { fetchapprovalRequesterSuccess } from "./slice";

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
