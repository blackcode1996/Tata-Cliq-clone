import * as types from "./actionTypes";
import axios from "axios";

//get
const getData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get("https://atatclickdatabase.vercel.app")
    .then((res) => {
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
      console.log("api data>", res.data);
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCT_FAILURE });
    });
};

//add
const addData = () => (dispatch) => {
  dispatch({ type: types.ADD_PRODUCT_REQUEST });
  return axios
    .post("https://atatclickdatabase.vercel.app")
    .then((res) => {
      dispatch({ type: types.ADD_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_PRODUCT_FAILURE });
    });
};

//edition
const editData = (id, payload) => (dispatch) => {
  dispatch({ type: types.EDIT_PRODUCT_REQUEST });
  return axios
    .patch(`https://atatclickdatabase.vercel.app/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.EDIT_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.EDIT_PRODUCT_FAILURE });
    });
};

//delete
const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  return axios
    .delete(`https://atatclickdatabase.vercel.app/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE });
    });
};

export { getData, addData, editData, deleteData };
