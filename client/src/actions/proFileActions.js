import axios from "axios";
import { GET_PROFILE } from "./types";
import { PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "./types";
export const getCurrentProfile = () => dispatch => {
  //加载动画
  dispatch(setProfileLoading());
  axios("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
