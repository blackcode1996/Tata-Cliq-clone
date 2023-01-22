import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Text } from "@chakra-ui/react";

export const ProductListPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#ececec" }}>
        <MensTextDiv>
          <Text fontSize='5xl'>Mens Wear</Text>
        </MensTextDiv>
        <DivWrapper>
          <FilterWrapper>
            <Sidebar />
          </FilterWrapper>
          <BooksListWrapper>
            <ProductList />
          </BooksListWrapper>
        </DivWrapper>
      </div>
      <Footer />
    </>
  );
};

const DivWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const FilterWrapper = styled.div`
  width: 20%;
  margin-left: 30px;
  margin-top: 100px;
`;
const BooksListWrapper = styled.div`
  width: 80%;
`;
const MensTextDiv = styled.div`
justify-content: "center";
text-align: center;
margin-top: 10px;
`;
