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
  GridItem,
  Button
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Single.css";
function Rating({ rating }) {


  return (
    <Box width="75px" display="flex" alignItems="center">
      
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
//part
export const ProductCard = ({ product }) => {
  return (

   <div className="mainProduct_box">

    <div className="Product_box">


      <div   className="img_box">
      <img src={
  product.images[0]
    ? product.images[0]
    : "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
}
alt={`Picture of ${product.title}`} />
      </div>

      <div className="detail_box">
        <button className="brand_btn">{product.brand}</button>
           <Text mt={1} ml={2} color={"teal"}>{product.discount}</Text>
           <Text mt={0} ml={2} >{product.title}</Text>
           

           <Flex color={"teal"} mr={"19px"} justifyContent="space-around" alignContent="center">
            <Rating rating={product.rating} />
            <Box  fontSize="17px" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"green"} fontSize="lg">
                ₹  {product.discounted_price}
              </Box>
             
            </Box>
            <Text  fontSize={15} textDecoration={"line-through"} color={"red"} mt={"4px"}>
              {product.strike_price}
            </Text>
          </Flex>
          <Link to={`/products/${product.id}`}> 
          <Button mt={2} ml={3} width={"90%"} colorScheme={"pink"}>View</Button>
          </Link>
         
      </div >
      
       </div>

   </div>

   
  );
};




