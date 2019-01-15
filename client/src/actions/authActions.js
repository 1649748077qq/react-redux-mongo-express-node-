import { GET_ERRORS } from "./types";
import { SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
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
      setAuthToken(token);
      //解析token
      const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//退出功能
export const logoutUser = () => dispatch => {
  //删除localStorage
  localStorage.removeItem("jwtToken");
  //干掉请求头
  setAuthToken(false);
  //连接reducer
  dispatch(setCurrentUser({}));
};
