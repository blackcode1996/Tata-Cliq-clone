import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS,Add_User,Delete_User,Update_User } from "./actionTypes"
import axios from "axios";

const getUSERSRequestAction=()=>{
    return{type:GET_USERS_REQUEST}
}

const getUSERSSuccesAction=(payload)=>{
    return {type:GET_USERS_SUCCESS,payload}
}

const getUSERSFailureAction=()=>{
    return{type:GET_USERS_FAILURE}
}

export const getUSERSs=(dispatch)=>{
    dispatch(getUSERSRequestAction())

    axios.get("https://atatclickdatabase.vercel.app/users").then((res)=>{
        dispatch(getUSERSSuccesAction(res.data))
    }).catch((err)=>{
        dispatch(getUSERSFailureAction())
    })
}

export const addUser = (payload) => async (dispatch) => {
    try {
        let data = await axios.post(`https://atatclickdatabase.vercel.app/users`, payload)
        dispatch({ type: Add_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}


export const UpdateUser = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`https://atatclickdatabase.vercel.app/users/${id}`, payload)
        dispatch({ type:Update_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}


export const DeleteUser= (id) => async (dispatch) => {
   
    try {
        let data = await axios.delete(`https://atatclickdatabase.vercel.app/users/${id}`)
        dispatch({ type: Delete_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}