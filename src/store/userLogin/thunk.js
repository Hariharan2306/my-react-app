import axios from "axios";
import api from "../../api";
import { failureLogin, successLogin } from "./slice";

export const postUserLogin = (data) => async (dispatch) => {
  try {
    const response = await api.post(`/login`, data);
    if (response.status === 200) {
      dispatch(successLogin(response.data.message));
      return response;
    }
  } catch (error) {
    dispatch(failureLogin(error));
  }
};

// export const postUserLogin = (data) => async (dispatch) => {
//   try {
//     console.log(response, ">>1");
//     const response = await api.post(`/login`, data);
//     console.log(response, ">>2");
//     if (response.status === 200) {
//       dispatch(successLogin(response.data));
//       return response;
//     } else {
//       dispatch(
//         failureLogin(new Error("Login failed with status: " + response.status))
//       );
//     }
//   } catch (error) {
//     dispatch(failureLogin(error));
//   }
// };

// export const postUserLogin = (data) => async (dispatch) => {
//   try {
//     console.log(">>1");
//     const response = await axios.post(`/login`, data);
//     if (response.status === 200) {
//       dispatch(successLogin(response));
//     }
//   } catch (error) {
//     dispatch(failureLogin(error));
//   }
// };
