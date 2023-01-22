import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Rating({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "red.500" : "red.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

export const ProductCard = ({ product }) => {
  return (
    <Flex
      p={5}
      maxH={"full"}
      display={product.images[0] ? "block" : "none"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="full"
        maxH="full"
        borderWidth="5px"
        rounded="lg"
        shadow="lg"
        position="relative"
        roundedTop="3xl"
      >
        <Circle p={"7px"} position="absolute" top={2} right={2} bg="#52b155">
          <Text color={"#fff"}>{product.brand}</Text>
        </Circle>
        <Link to={`/products/${product.id}`}>
          <Image
            w={"full"}
            m={"auto"}
            h={"50%"}
            objectFit={"contain"}
            src={
              product.images[0]
                ? product.images[0]
                : "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            alt={`Picture of ${product.title}`}
            roundedTop="2xl"
          />
        </Link>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              {product.discount}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={8} w={8} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>
          <Text h="20px">{product.subtitle}</Text>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={product.rating} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
              </Box>
              {product.discounted_price}
            </Box>
            <Text textDecoration={"line-through"} color={"gray.600"} mt={"5px"}>
              {product.strike_price}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};