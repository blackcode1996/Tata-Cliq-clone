import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const settings1 = {
    infinite: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    fade: true,
    useCss: true,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const carousel = [
    {
      id: 1,
      img: "https://tatacliq.netlify.app/images/home%20page/top%20-carousel%20(1).jpg",
    },
    {
      id: 2,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45581158809630.jpg",
    },
    {
      id: 3,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45554503090206.jpg",
    },
    {
      id: 4,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45581158940702.jpg",
    },
    {
      id: 5,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45581159006238.jpg",
    },
    {
      id: 6,
      img: "https://assets.tatacliq.com/medias/sys_master/images/46197908439070.jpg",
    },
  ];
  const last = [
    {
      id: 1,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45513137127454.jpg",
    },
    {
      id: 2,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45567584534558.jpg",
    },
    {
      id: 3,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45513137389598.jpg",
    },
    {
      id: 4,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45513137455134.jpg",
    },
    {
      id: 5,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45513137258526.jpg",
    },
    {
      id: 6,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45513137061918.jpg",
    },
  ];
  const slider = [
    {
      id: 1,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216608798.jpg",
    },
    {
      id: 2,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216674334.jpg",
    },
    {
      id: 3,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216739870.jpg",
    },
    {
      id: 4,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45576216805406.jpg",
    },
    {
      id: 5,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45622605905950.jpg",
    },
    {
      id: 6,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45622606037022.jpg",
    },
    {
      id: 7,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619580305438.jpg",
    },
    {
      id: 8,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619580436510.jpg",
    },
    {
      id: 9,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45536791658526.jpg",
    },
    {
      id: 10,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45536791789598.jpg",
    },
    {
      id: 11,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619571556382.jpg",
    },
    {
      id: 12,
      img: "https://assets.tatacliq.com/medias/sys_master/images/45619569983518.jpg",
    },
  ];
  return (
    <>
      <div style={{ background: "rgb(236,236,236)" }}>
        <div style={{ width: "100%" }}>
          <Slider {...settings1}>
            {carousel.map((item) => (
              <div key={item.id}>
                <img className="slide1" src={item.img} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <div className="cat-img">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45548090884126.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822749726.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822782494.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822815262.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822848030.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45536787791902.gif"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822880798.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822913566.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519822979102.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45519823011870.jpg"
              alt=""
              className="last"
            />
          </div>
          <div className="payment-method">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45103367290910.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45433290981406.jpg"
              alt=""
            />
          </div>
          <div className="banner">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45536787398686.jpg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45539109175326.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45539107635230.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45536789692446.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45539109339166.jpg"
              alt=""
            />
          </div>
          <div>
            <div>
              <img
                style={{ margin: "auto" }}
                src="https://assets.tatacliq.com/medias/sys_master/images/45461314043934.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45587495813150.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581157761054.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581157826590.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45567395594270.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/2.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45587477364766.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45582604828702.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581164281886.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45587477430302.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45589087453214.gif"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/7.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45576213397534.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581156089886.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581156155422.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581156155422.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/9.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45382586564638.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45382586630174.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45435992703006.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45382587318302.jpg"
              alt=""
            />
          </div>
          <div style={{ marginBottom: "65px" }}>
            <img
              style={{ margin: "auto" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45589087453214.gif"
              alt=""
            />
          </div>
          <div className="banner">
            <img
              style={{ margin: "auto", height: "300px" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45032248639518.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/1.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584580378654.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584586997790.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587063326.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587259934.jpg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587653150.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587784222.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587718686.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584587522078.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45589087453214.gif"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584575987742.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576053278.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576118814.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576184350.jpg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576446494.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576512030.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45554447581214.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45584576708638.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/5.png"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45435991523358.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45435991588894.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45567584862238.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45435991719966.jpg"
              alt=""
            />
          </div>
          <div className="banner">
            <img
              style={{ margin: "auto", marginTop: "40px" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45536787398686.jpg"
              alt=""
            />
          </div>
          <div className="child-card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581162905630.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581162971166.jpg"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581163036702.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581163102238.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581163167774.jpg"
              alt=""
            />
            <img
              src="https://assets.tatacliq.com/medias/sys_master/images/45581163233310.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://tata-cliq-clone.netlify.app/Images/3.png"
              alt=""
            />
          </div>
          <div style={{ width: "100%" }}>
            <Slider {...settings1}>
              {last.map((item) => (
                <div key={item.id}>
                  <img className="slide1" src={item.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <img
              style={{ margin: "auto" }}
              src="https://assets.tatacliq.com/medias/sys_master/images/45461314043934.jpg"
              alt=""
            />
          </div>
          <div style={{ maxWidth: "100%", margin: "auto", height: "auto" }}>
            <Slider {...settings2}>
              {slider.map((item) => (
                <div key={item.id} className="slider">
                  <img className="slide1" src={item.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
