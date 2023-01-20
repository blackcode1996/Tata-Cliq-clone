import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import Sort from "./Sort";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.ProductReducer.clothing);

  

  // console.log(products)

  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <>
    <Sort/>
      <DivWrapper>
        {products.length > 0 &&
          products.map((el) => {
            return <ProductCard key={el.id} product={el} />;
          })}
      </DivWrapper>
    </>
  );
};

const DivWrapper = styled.div`
    margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 15px;
`;

export default ProductList;