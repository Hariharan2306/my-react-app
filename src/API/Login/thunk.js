import api from "../../api";
import { loginRequestFailure, loginRequestSuccess } from "./slice";

export const login = (data) => async (dispatch) => {
  try {
    const response = await api.post(`/login`, data);
    if (response.status === 200) {
      dispatch(loginRequestSuccess(response.data.data));
      return response.data.data;
    }
  } catch (error) {
    dispatch(loginRequestFailure(error));
  }
};
