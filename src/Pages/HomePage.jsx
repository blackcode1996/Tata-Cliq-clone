import React from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./Home.css"
const HomePage = () => {
    const settings1 = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    const carousel=[{id:1,img:"https://assets.tatacliq.com/medias/sys_master/images/45584593518622.gif"},
                     {id:2,img:"https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg"},
                     {id:3,img:"https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg"},
                     {id:4,img:"https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg"},
                     {id:5,img:"https://assets.tatacliq.com/medias/sys_master/images/45581159006238.jpg"},
                     {id:6,img:"https://assets.tatacliq.com/medias/sys_master/images/45536787398686.jpg"},
                   ]
  return (
    <div  style={{background:"rgb(236,236,236)"}}>
        <div style={{ width: "100%"}}>
        <Slider {...settings1}>
          {carousel.map((item) => (
            <div key={item.id}>
             
              <img className="slide1" src={item.img} alt=""  />
              
            </div> 
          ))}
        </Slider>
  
      </div>
      <div>
        <div className='cat-img'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45548090884126.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822749726.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822782494.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822815262.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822848030.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45536787791902.gif" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822880798.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822913566.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519822979102.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45519823011870.jpg" alt="" />
          
        </div>
        <div className='payment-method'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45103367290910.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45433290981406.jpg" alt="" />
        </div>
        <div className="banner">
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45536787398686.jpg" alt="" />
        </div>
        <div className='card'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45539109175326.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45539107635230.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45536789692446.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45539109339166.jpg" alt="" />
        </div>
        <div >
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45461314043934.jpg" alt="" />
        </div>
        <div className='card'>
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45587495813150.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45581157761054.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45581157826590.jpg" alt="" />
          <img src="https://assets.tatacliq.com/medias/sys_master/images/45567395594270.jpg" alt="" />
        </div>
        <div>
          <img src="https://tata-cliq-clone.netlify.app/Images/2.png" alt="" />
        </div>
          <div className='card'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45587477364766.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45582604828702.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45581164281886.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45587477430302.jpg" alt="" />
            
          </div>
          <div>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45589087453214.gif" alt="" />
          </div>
          <div>
            <img src="https://tata-cliq-clone.netlify.app/Images/7.png" alt="" />
          </div>
          <div className='card'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45576213397534.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45581156089886.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45581156155422.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45581156155422.jpg" alt="" />
          </div>
          <div>
            <img src="https://tata-cliq-clone.netlify.app/Images/9.png" alt="" />
          </div>
          <div className='card'>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45382586564638.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45382586630174.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45435992703006.jpg" alt="" />
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45382587318302.jpg" alt="" />
          </div>
          <div>
            <img src="https://assets.tatacliq.com/medias/sys_master/images/45589087453214.gif" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage