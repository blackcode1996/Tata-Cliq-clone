import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import "@emotion/react";
import "@emotion/styled";
import "framer-motion";
export const Cartcard = ({
  id,
  discounted_price,
  images,
  title,
  quantity,
  brand,
  deleteData,
  Increaseq,
  Decreaseq,
}) => {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p={5}
        // border={"2px solid blue"}
      >

        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm:
 "200px" }}
          src={images[0]}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
      
      <Heading size="md">{title}</Heading>
            <Text py="2">{brand}</Text>
            <Text py="2">RS: {discounted_price}</Text>
          </CardBody>

          <CardFooter textAlign="center" alignItems={"center"} gap={"20px"}>
            <Button
              variant="solid"
              colorScheme="blue"
              size={"sm"}
              disabled={quantity === 1}
              onClick={() => Decreaseq(id)}
            >
              -
            </Button>
            <Heading size={"md"}>{quantity}</Heading>
            <Button
              variant="solid"
              colorScheme="blue"
              size={"sm"}
              onClick={() => Increaseq(id)}
            >
              +
            </Button>
            <Button
              variant="solid"
              colorScheme="Red"
              bg={"red"}
              size={"md"}
              onClick={() => deleteData(id)}
            >
              Remove
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};
