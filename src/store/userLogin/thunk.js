import api from "../../api";
import { failureLogin, successLogin } from "./slice";

export const postUserLogin = (userId, password) => async (dispatch) => {
  try {
    const credentials = {
      userId,
      password,
    };
    const response = await api.post(`/login`, credentials);
    if (response.status === 200) {
      dispatch(successLogin(response.data.data));
      return response.data.data;
    }
  } catch (error) {
    dispatch(failureLogin(error));
  }
};
