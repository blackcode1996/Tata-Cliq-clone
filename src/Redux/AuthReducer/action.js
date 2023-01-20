import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actionTypes"
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