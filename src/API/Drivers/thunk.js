import api from "../../api";
import { fetchDriversFailure, fetchDriversSuccess } from "./slice";

export const postDriver = (data) => async (dispatch) => {
  try {
    const response = await api.post("/driver/create-driver", data);
    if (response.status === 200) {
      dispatch(fetchDriversSuccess(response.data));
      return response.data;
    }
  } catch (error) {
    dispatch(fetchDriversFailure(error));
  }
};
