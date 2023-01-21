import { GET_USERS_SUCCESS,Add_User,Delete_User,Update_User,GET_PRODUCT_SUCCESS,Add_PRODUCT,Delete_PRODUCT,Update_PRODUCT } from "./actionTypes"
import axios from "axios";


const getUSERSSuccesAction=(payload)=>{
    return {type:GET_USERS_SUCCESS,payload}
}



export const getUSERSs=(dispatch)=>{

    axios.get("https://atatclickdatabase.vercel.app/users").then((res)=>{
        dispatch(getUSERSSuccesAction(res.data))
    }).catch((err)=>{
        console.log(err)
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
        console.log(data);
        dispatch({ type:Update_User, payload: data })
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
const getPROSuccesAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}



export const getpro=(dispatch)=>{

    axios.get("https://atatclickdatabase.vercel.app/Product").then((res)=>{
        dispatch(getPROSuccesAction(res.data))
    }).catch((err)=>{
        console.log(err)
    })
}

export const addPRO = (payload) => async (dispatch) => {
    try {
        let data = await axios.post(`https://atatclickdatabase.vercel.app/Product`, payload)
        dispatch({ type: Add_PRODUCT, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}


export const Updatepro = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`https://atatclickdatabase.vercel.app/Product/${id}`, payload)
        dispatch({ type:Update_PRODUCT, payload: data })
    } catch (error) {
       console.log(error)
    }
}


export const DeletePRo= (id) => async (dispatch) => {
   
    try {
        let data = await axios.delete(`https://atatclickdatabase.vercel.app/users/${id}`)
        dispatch({ type: Delete_PRODUCT, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}