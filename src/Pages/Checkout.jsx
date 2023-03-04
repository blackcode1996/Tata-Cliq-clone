import React from "react";
import { Navbar } from "../Components/Navbar";
// import "./checkout.sass";
import { Footer } from "../Components/Footer";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
export const Checkout = () => {
  const [paid, setpaid] = useState(false);
  if (paid) {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
    return (
      <Box>
        <Flex
          w={"80%"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignContent={"center"}
          m={"auto"}
          mt={20}
        >
          <Box w={"80%"} m={"auto"}>
            <Heading>Payment Successful !</Heading>
          </Box>
          <Box justifyContent={"center"} w={"40%"} m={"auto"}>
            <Image src="https://i.ibb.co/Lp1Y7g9/checkout.gif" />
          </Box>
        </Flex>
      </Box>
    );
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <Box
        w={{ base: "100%", lg: "60%" }}
        m={"auto"}
        backgroundColor={"white"}
        p={10}
        border={"2px solid black"}
      >
        <Box w={"95%"} m={"auto"} textAlign={"center"}>
          <Heading>Shipping Details</Heading>
          <Flex
            w={"95%"}
            m={5}
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            textAlign={"start"}
          >
            <Box>
              <Text>First Name</Text>
              <Input placeholder="First Name" />
            </Box>
            <Box>
              <Text>Last Name</Text>
              <Input placeholder="Last Name" />
            </Box>
          </Flex>
          <Flex w={"95%"} m={5} textAlign={"start"}>
            <Box w={"100%"}>
              <Text>Address</Text>
              <Input placeholder="Address" />
            </Box>
          </Flex>
          <Flex
            w={"95%"}
            m={5}
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            textAlign={"start"}
          >
            <Box w={{ base: "100%", lg: "30%" }}>
              <Text>City</Text>
              <Input placeholder="City" />
            </Box>
            <Box w={{ base: "100%", lg: "30%" }}>
              <Text>State</Text>
              <Input placeholder="State" />
            </Box>
            <Box w={{ base: "100%", lg: "30%" }}>
              <Text>Zip Code</Text>
              <Input placeholder="zip Code" />
            </Box>
          </Flex>
        </Box>
        <Box w={"95%"} m={"auto"} textAlign={"center"}>
          <Heading>Payment Option</Heading>
          <Flex
            w={"95%"}
            m={5}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignContent={"space-between"}
            textAlign={"start"}
          >
            <Box>
              <Text>Card</Text>
              <Input placeholder="Card" />
            </Box>
            <Box
              display={"flex"}
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent={"space-between"}
              mt={10}
            >
              <Box>
                <Text>Date</Text>
                <Input placeholder="Expiry/Date" />
              </Box>
              <Box>
                <Text>Cvv</Text>
                <Input placeholder="Cvv" />
              </Box>
            </Box>
          </Flex>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            w={"80%"}
            m={10}
          >
            <Button onClick={() => setpaid(true)}>Purchase</Button>
            <Link to="/cart">
              <Button>Back to Cart</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
