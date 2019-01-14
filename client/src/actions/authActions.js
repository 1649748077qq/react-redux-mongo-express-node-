import { GET_ERRORS } from "./types";
import axios from "axios";
export const registerUser = (userData, history) => dispatch => {
  //给reducer
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//登录
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      //存储token到localStorage
      localStorage.setItem("jwtToken", token);
      //设置axios的headers token
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
