import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import "./SingleProduct.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const SingleProduct = () => {

  const dispatch=useDispatch()

  const products=useSelector((store)=>store.ProductReducer.clothing)

    console.log(products)
      
   //console.log("img",products.images)

   const [img , setImg] =useState("https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg");


   useEffect(()=>{
    dispatch(getProducts)
},[])

  
  
   const Productdata = [  {
    "category": "Child",
    "title": "HELLCAT",
    "subtitle": "Set Of 2 Boys Sweatshirt",
    "discounted_price": "679",
    "strike_price": "3998",
    "discount": "(83% OFF)",
    "images": [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg"
    ],
    "size": [
      "3-4Y, ",
      "5-6Y, ",
      "7-8Y, ",
      "9-10Y, ",
      "11-12Y, ",
      "13-14Y, ",
      "15-16Y"
    ],
    "rating": "4.4",
    "rating_count": "5"
  }]


//console.log("img",products.images[1])

  const handleClick=(e)=>{
    e.preventDefault()
    setImg(products.images[1])
    console.log("ram")
  }

  return (
 <>
 <Box className='main' >

  <Box className='child'>
    <Flex>
    <ArrowBackIosIcon sx={{ fontSize: 60 }} className="leftarrow"/>
    <Box className='imgbox'><img src={img} alt="" /></Box>
    
    < ArrowForwardIosIcon onClick={handleClick} sx={{ fontSize: 60 }}  className="rightarrow"/>
    </Flex>
   

  <Flex className='small_img_flex'>
    <Box className='small_img'><img onClick={()=>setImg("https://img.tatacliq.com/images/i8/97Wx144H/MP000000012103097_97Wx144H_202202121201531.jpeg")} src="https://img.tatacliq.com/images/i8/97Wx144H/MP000000012103097_97Wx144H_202202121201531.jpeg" alt="" />
    </Box>
  <Box className='small_img'><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg" alt="" /></Box>
  <Box className='small_img'><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg" alt="" /></Box>
  <Box className='small_img'><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg" alt="" /></Box>
  <Box className='small_img'><img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg" alt="" /></Box>
  </Flex>
 

  </Box>



  <Box className='child2'>222</Box>
 </Box>
 </>
  )
}
