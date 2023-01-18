import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

const getProductsRequestAction=()=>{
    return {type:GET_PRODUCT_REQUEST}
}

const getProductsSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const getProductsFailureAction=()=>{
    return {type:GET_PRODUCT_FAILURE}
}

export const getProducts=(dispatch)=>{
    dispatch(getProductsRequestAction(getProductsRequestAction()));
    
    axios.get("https://atatclickdatabase.vercel.app/clothing").then((res)=>{
        // console.log(res.data)
        dispatch(getProductsSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(getProductsFailureAction())
    })
}

