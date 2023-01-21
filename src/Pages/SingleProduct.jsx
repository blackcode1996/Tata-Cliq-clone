import React from "react";
import { useState, useEffect } from "react";
import SingleCart from "../Components/SingleCart";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const SingleProduct = () => {
   const [data , setData] = useState({})
   const param = useParams();
  let x;
  console.log("userId",param)
  
  
  const getSingleProduct=(id)=>{
    return axios.get(`https://wadrobe.onrender.com/men/${id}`)
  }


useEffect(()=>{
  getSingleProduct(param.id).then((res)=>{
    // console.log(res.data)
    setData(res.data)
  })
 
},[])
  
  //console.log(data)

  return (
    <>
     <SingleCart  data={data}/>
    </>
  );
};
