import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Single.css";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LargeWithLogoLeft from "./bottom";

const SingleCart = ({data}) => { 
 console.log("my",data)

console.log("img",data.images[0])

const [curimg, setImg] = useState({})  
    


  return (
    <>
      <h1>Ram</h1>
      <Box className="main">
        <Box className="child">
          <Flex>
            <ArrowBackIosIcon sx={{ fontSize: 60 }} className="leftarrow" />
            <Box className="imgbox">
              <img src={curimg} alt="" />
            </Box>

            <ArrowForwardIosIcon sx={{ fontSize: 60 }} className="rightarrow" />
          </Flex>

          <Flex className="small_img_flex">
            <Box className="small_img">
              <img src="" alt="" />
            </Box>
            <Box className="small_img">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
                alt=""
              />
            </Box>
            <Box className="small_img">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
                alt=""
              />
            </Box>
            <Box className="small_img">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
                alt=""
              />
            </Box>
            <Box className="small_img">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
                alt=""
              />
            </Box>
          </Flex>
        </Box>

        <Box className="child2">
          <Text
            marginTop={5}
            marginLeft={98}
            width={220}
            color={"white"}
            backgroundColor={"red.100"}
            fontSize={12}
          >
            Popular: Recently wishlisted 57 times
          </Text>
          <Flex className="right_box_h1">
            <Text fontSize={22}>Ginger by Lifestyle</Text>

            <Box className="logoicon">
              <ShareIcon fontSize="large" />
              <FavoriteBorderSharpIcon className="heard" />
            </Box>
          </Flex>
          <Text className="second_text" fontSize={24}>
            Ginger by Lifestyle Black Printed Top
          </Text>
          <Text fontSize={25} className="price">
            <Flex>
              {" "}
              ₹2274{" "}
              <Text marginTop={2} sx={{ fontSize: 17 }} marginLeft={8}>
                MRP 444
              </Text>
              <Text
                marginTop={2}
                sx={{ fontSize: 17 }}
                marginLeft={8}
                color={"green"}
              >{`(35% OFF)`}</Text>
            </Flex>
            <Text fontSize={15}>inclusive off all taxes</Text>

            <Button marginTop={5} color={"white"} backgroundColor={"red.200"}>
              Price dropped by ₹350 recently
            </Button>

            <Text color={"red.500"} marginTop={5} fontSize={14}>
              Free shipping for all orders
            </Text>
          </Text>
          <Flex>
            <Button
              marginTop={8}
              marginLeft={92}
              color={"white"}
              backgroundColor={"green"}
            >
              {" "}
              5 *{" "}
            </Button>{" "}
            <Text marginLeft={3} marginTop={9}>
              1 rating
            </Text>
          </Flex>
          <Text fontSize={20} marginLeft={92} marginTop={19}>
            AVAILABLE OFFERS
          </Text>

          <Flex>
            <Box marginTop={7} marginLeft={92}>
              {" "}
              <img
                src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png"
                alt=""
              />
            </Box>
            <Box>
              {" "}
              <Text fontSize={14} marginLeft={3} marginTop={5}>
                10% off on ICICI Bank Credit Cards
              </Text>
              <Text fontSize={14} marginLeft={3} marginTop={1}>
                Min Purchase: ₹1500 | Max Discount: ₹1000 more
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box marginTop={7} marginLeft={92}>
              {" "}
              <img
                src="https://assets.tatacliq.com/medias/sys_master/images/27678831018014.png"
                alt=""
              />
            </Box>
            <Box>
              {" "}
              <Text fontSize={14} marginLeft={3} marginTop={5}>
                10% off on Tata Neu HDFC Credit Card and Credit Card EMI
              </Text>
              <Text fontSize={14} marginLeft={3} marginTop={1}>
                Min Purchase: ₹1750 | Max Discount: ₹1000 more
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box marginTop={7} marginLeft={92}>
              {" "}
              <img
                style={{ width: "30px" }}
                src="https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg"
                alt=""
              />
            </Box>
            <Box>
              {" "}
              <Text fontSize={14} marginLeft={3} marginTop={5}>
                Flat 5% off on all UPI transactions
              </Text>
              <Text fontSize={14} marginLeft={3} marginTop={1}>
                Use Code: UPI|Max Discount: ₹300 more
              </Text>
            </Box>
          </Flex>
          <Text
            color={"white"}
            backgroundColor={"red.100"}
            fontSize={12}
            marginTop={3}
            marginLeft={92}
            width={32}
          >
            See 1 More Offers
          </Text>
          <Text fontSize={13} marginTop={7} marginLeft={92}>
            Colour: Grey & Blue
          </Text>
          <Box marginTop={3} marginLeft={92}>
            {" "}
            <img
              style={{ width: "65px" }}
              src="https://img.tatacliq.com/images/i8/97Wx144H/MP000000015198750_97Wx144H_202211060735261.jpeg"
              alt=""
            />
          </Box>
          <Text fontSize={13} marginLeft={92}>
            select Size
          </Text>
          <Flex
            marginTop={3}
            justifyContent={"space-between"}
            width={"50%"}
            marginLeft={92}
          >
            <Text cursor={"pointer"} fontSize={14}>
              S
            </Text>
            <Text cursor={"pointer"} fontSize={14}>
              M
            </Text>
            <Text cursor={"pointer"} fontSize={14}>
              L
            </Text>
            <Text cursor={"pointer"} fontSize={15}>
              XL
            </Text>
            <Text cursor={"pointer"} fontSize={15}>
              XXL
            </Text>
            <Text cursor={"pointer"} fontSize={15}>
              3XL
            </Text>
            <Text cursor={"pointer"} color={"red.500"}>
              Size guide
            </Text>
          </Flex>
          <Flex marginTop={4} marginLeft={85}>
            <Button
              borderRadius={"10px"}
              color={"white"}
              backgroundColor={"red.400"}
            >
              BUY NOW
            </Button>
            <Button
              borderRadius={"10px"}
              color={"red"}
              marginLeft={10}
              border={"2px solid red"}
            >
              ADD TO BAG
            </Button>
          </Flex>

          <Box
            marginTop={4}
            marginLeft={87}
            width={"82%"}
            borderBottom={"2px solid white"}
          ></Box>
          <Text fontSize={14} marginTop={4} marginLeft={92}>
            Sold directly by Eshopbox Ecommerce Pvt.Ltd
          </Text>
          <Box
            marginTop={4}
            marginLeft={87}
            width={"82%"}
            borderBottom={"2px solid white"}
          ></Box>
          <Box
            marginTop={4}
            marginLeft={87}
            width={"82%"}
            borderBottom={"2px solid white"}
            gap={7}
          >
            <Flex gap={"35px"}>
              {" "}
              <Text>ship to</Text> <Text>Jabalpur</Text> <Text>482002</Text>
            </Flex>
          </Box>

          <Box
            marginTop={4}
            marginLeft={87}
            width={"82%"}
            borderBottom={"2px solid white"}
          >
            <Flex marginTop={4}>
              <LocalShippingIcon sx={{ fontSize: 40 }} />{" "}
              <Text marginTop={"1px"} marginLeft={7}>
                Delivery by 25th Jan
              </Text>
              <Box marginLeft={100}>
                <Text fontSize={13}> Cash on Delivery</Text>
                <Text color={"green.400"} fontSize={11}>
                  {" "}
                  Available
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <LargeWithLogoLeft />
    </>
  );
};

export default SingleCart;
