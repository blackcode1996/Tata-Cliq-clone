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
          <ListWrapper>
            <ProductList />
          </ListWrapper>
        </DivWrapper>
      </div>
      <Footer />
    </>
  );
};

const DivWrapper = styled.div`
  display: flex;
`;
const FilterWrapper = styled.div`
  width: 30%;
  margin-left: 30px;
  margin-top: 140px;
`;
const ListWrapper = styled.div`
  width: 80%;
`;
const MensTextDiv = styled.div`
justify-content: "center";
text-align: center;
padding-top: 20px;
margin-bottom: -40px;
`;
