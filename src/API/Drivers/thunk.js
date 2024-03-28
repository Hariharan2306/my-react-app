import api from "../../api";
import {
  fetchDriversFailure,
  fetchDriversSuccess,
  getDriversSuccess,
} from "./slice";

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

export const getAllDrivers = () => async (dispatch) => {
  try {
    const response = await api.get("/driver/get-all-driver");
    if (response.status === 200) {
      dispatch(getDriversSuccess(response.data.data));
    }
  } catch (error) {
    dispatch(fetchDriversFailure(error));
  }
};

export const onBoardDriverThunk = (data) => async (dispatch) => {
  try {
    const response = await api.post("/driver/on-board-driver", data);
    if (response.status === 200) {
      dispatch(getAllDrivers());
      return response.data;
    }
  } catch (error) {
    dispatch(fetchDriversFailure(error));
  }
};
