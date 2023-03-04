import React, { useEffect, useState } from "react";

import { Link, Navigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Cartcard } from "../Components/Cartcard";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const width = useBreakpointValue({ base: "100%", lg: "60%" });
  // Getting the cart data
  const getData = async () => {
    const d = JSON.parse(localStorage.getItem("cartData")) || null;
    setData(d);
    getTotal();
  };
  // deleting the data from the cart
  const deleteData = (id) => {
    if (data.length > 0) {
      const data1 =
        data.filter((item) => {
          return id !== item.id;
        }) || [];
      setData(data1);
      localStorage.setItem("cartData", JSON.stringify(data1));
      getTotal();
    }
  };
  // Increasing the Quantity
  const Increaseq = (id) => {
    if (data.length > 0) {
      const r = data.map((item) => {
        return item.id == id ? { ...item, quantity: item.quantity + 1 } : item;
      });

      setData(r);
      localStorage.setItem("cartData", JSON.stringify(r));
      getTotal();
    }
  };
  // Decrease Quantity
  const Decreaseq = (id) => {
    if (data.length > 0) {
      const r = data.map((item) => {
        return item.id == id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item;
      });
      setData(r);
      localStorage.setItem("cartData", JSON.stringify(r));
      getTotal();
    }
  };
  // Get Total RS
  const getTotal = () => {
    const data = JSON.parse(localStorage.getItem("cartData"));
    let t = 0;
    data.forEach((e) => {
      t = t + Number(e.discounted_price) * Number(e.quantity);
    });
    setTotal(t);
    localStorage.setItem("totalAmount", JSON.stringify(t));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box textAlign={"center"} m={10}>
        <Heading>Your Bag</Heading>
      </Box>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        bg={"white"}
        justifyContent={"space-around"}
      >
        <Box style={{ width }}>
          {data.length > 0 ? (
            data.map((item) => {
              return (
                <Cartcard
                  key={item.id}
                  {...item}
                  deleteData={deleteData}
                  Increaseq={Increaseq}
                  Decreaseq={Decreaseq}
                />
              );
            })
          ) : (
            <Image src="https://i.ibb.co/d6YsNRH/empty-cart.gif" />
            // <Button>Continue Shoping</Button>
          )}
        </Box>
        <Box
          border={"1px solid grey"}
          borderRadius={"5px"}
          width={{ base: "100%", lg: "25%" }}
          bg={"white"}
          variant="outline"
          maxHeight={"300px"}
        >
          <Box m={10}>
            <Flex textAlign={"center"} justifyContent="space-between" m={3}>
              <p>Bag Total</p>
              <p>{total}</p>
            </Flex>
            <Flex textAlign={"center"} justifyContent="space-between" m={3}>
              <p>Shipping Charges</p>
              <p>Free</p>
            </Flex>
            <Flex textAlign={"center"} justifyContent="space-between" m={3}>
              <p>Bag Subotal</p>
              <p>{total}</p>
            </Flex>
            <Link to="/checkout">
              <Button colorScheme="teal" variant="outline" w={"100%"}>
                Checkout
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
