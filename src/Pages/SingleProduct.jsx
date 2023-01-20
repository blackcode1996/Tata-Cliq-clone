import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCart from "../Components/SingleCart";
import { getProducts } from "../Redux/ProductReducer/action";

export const SingleProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.clothing);

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <>
      {products.length > 0 &&
        products.map((el, index) => {
          return <SingleCart key={index * 5} item={el} />;
        })}
    </>
  );
};
