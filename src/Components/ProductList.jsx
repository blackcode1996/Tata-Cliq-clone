import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import Sort from "./Sort";
import { useLocation, useSearchParams } from "react-router-dom";
import Loading from "./Assests/loading.gif";
import { GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.ProductReducer.clothing);

  const location = useLocation();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const order = searchParams.get("order");
    let paramObj = {
      params: {
        brand: searchParams.getAll("brand"),
        _sort: order && "discounted_price",
        _order: order,
      },
    };
    dispatch(getProducts(paramObj));
  }, [location.search]);

  return (
    <>
      <Sort />
      <DivWrapper>
        <SimpleGrid
          m={"auto"}
          spacing={"10px"}
          minChildWidth={"250px"}
          maxchildWidth={"350px"}
          // maxchildHeight={"400px"}
          columns={3}
          alignContent={"center"}
        >
          {products && products.length > 0 ? (
            products.map((el) => {
              return <ProductCard key={el.id} product={el} />;
            })
          ) : (
            <Image src={Loading} marginLeft={"350px"} />
          )}
        </SimpleGrid>
      </DivWrapper>
    </>
  );
};

const DivWrapper = styled.div`
  margin-top: 150px;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  // border: 2px solid black;
`;

export default ProductList;
