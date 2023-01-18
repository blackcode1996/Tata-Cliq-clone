import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import "./Navbar.css";

export const Navbar = () => {
  const [current, setcurrent] = useState(false);
  const [text, setText] = useState("");
  let navigate = useNavigate();
  const linkstyle = {
    textDecoration: "none",
    color: "green",
  };

  const products = [
    "shirts",
    "formal-shirts",
    "t-shirts",
    "socks",
    "formal-shirts",
    "shoes",
    "shoes-sneakers",
    "shoes-formal",
    "shoes-heels",
    "electronics",
    "footwear",
    "beauty & grooming",
    "eyewear",
    "Men's Clothing",
  ];

  function handinginputbox() {
    if (text.length > 1) {
      setcurrent(true);
    }

    if (text.length == 1) {
      setcurrent(false);
    }

    if (text == "") {
      setcurrent(false);
    }
  }

  function clickoninputdrop(targ) {
    document.getElementById("right_lower_box_third_input_box_id").value = targ;
  }
  return (
<<<<<<< HEAD
    <div>Navbar</div>
  )
}
=======
    <>
      <div id="main_navbar">
        <div id="navbar_left_box">
          <Link to="/">
            {" "}
            <img id="img_of_logo" src="https://i.ibb.co/y459KXM/logo.png"></img>
          </Link>
        </div>
        <div id="navbar_left_bar">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              colorScheme="gray"
              bg={"gray"}
            >
              Category
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <span>Men's Wear</span>
              </MenuItem>
              <MenuItem minH="40px">
                <span>Kid's Wear</span>
              </MenuItem>
              <MenuItem minH="40px">
                <span>Footwear</span>
              </MenuItem>
              <MenuItem minH="40px">
                <span>Electronic</span>
              </MenuItem>
              <MenuItem minH="40px">
                <span>Home Essestials</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div id="navbar_right_box">
          <div id="top_log">
            <img src="/Tata_Assets/logo.png" alt="logo" />
          </div>
          <div id="right_upper_box">
            <div id="right_upper_box_left_box">
              <div>
                <h1 className="upper_boxof_navbar_h1">Tata CLiq Luxury</h1>
              </div>
            </div>
            <div id="right_upper_box_right_box">
              <div>
                <h1 className="upper_boxof_navbar_h1">CLiq Cash</h1>
              </div>
              <div>
                <h1 className="upper_boxof_navbar_h1">Gift Card</h1>
              </div>
              <div>
                <Link to="/login">
                  {" "}
                  <h1 className="upper_boxof_navbar_h1">Login</h1>
                </Link>
              </div>
              <div>
                <Link to="/admin">
                  {" "}
                  <h1 className="upper_boxof_navbar_h1">Admin</h1>
                </Link>
              </div>
              <div></div>
            </div>
          </div>
          <div id="right_lower_box">
            <Link to="/products/footwear">
              {" "}
              <div className="right_lower_box_first">
                <div className="right_lower_box_first_first">
                  <div id="category_box_arrow">
                    <div>
                      <h1
                        className="lowerboxof_navbar_category"
                        id="category_box"
                      >
                        Categories
                      </h1>
                    </div>
                    <div id="category_box_arrow_arrow">
                      <h1>
                        <ChevronDownIcon />
                      </h1>
                    </div>
                  </div>
                  <div className="dropdown-menu-category">
                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Kid's Fashion
                        </a>
                      </Link>
                    </div>

                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Home & kitchen
                        </a>
                      </Link>
                    </div>

                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Beauty
                        </a>
                      </Link>
                    </div>

                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Gedgets
                        </a>
                      </Link>
                    </div>

                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Jewellery
                        </a>
                      </Link>
                    </div>

                    <div className="a-a">
                      <Link style={linkstyle}>
                        <a
                          className="black-giving"
                          style={{ fontWeight: "450" }}
                        >
                          Accessories
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="right_lower_box_second">
              <div className="right_lower_box_second_first">
                <div id="brand_box_arrow">
                  <div>
                    <h1 className="lowerboxof_navbar_brand" id="brand_box">
                      Brands
                    </h1>
                  </div>
                  <div id="brand_box_arrow_arrow">
                    <h1>
                      <ChevronDownIcon />
                    </h1>
                  </div>
                </div>

                <div className="dropdown-menu-category-brands">
                  <div className="dropdown-menu-category-brands-first">
                    <div className="dropdown-menu-category-brands-first-first h5-tag">
                      <p id="brand_menu" style={{ fontWeight: "300" }}>
                        Women's Wear
                      </p>
                    </div>
                    <div className="dropdown-menu-category-brands-first-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p className="black-giving">Popular Brands</p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Utsa</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Forver 21</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Lov</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Biba</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Bomabay Pasley</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Only</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Wardrobe</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Ishin</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Vark</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Trumph</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zuba</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Indo Era</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zivame</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Zink London</Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Featured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Westside</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Westside</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>wan huesen</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Adidas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Arelia</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Engamo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Levi's</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jaipuri kurti</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Clovia</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Soch</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>United color</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Globus</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-second">
                    <div className="dropdown-menu-category-brands-second-first h5-tag">
                      <p id="brand_menu" style={{ fontWeight: "300" }}>
                        Men's Wear
                      </p>
                    </div>
                    <div className="dropdown-menu-category-brands-second-second">
                      <div>
                        <div>
                          <div>
                            <Link style={linkstyle}>
                              <p id="brand_menu" className="black-giving">
                                Popular Brands
                              </p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Utsa</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Eta</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Kazo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Engamo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Levi's</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Puma</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ascot</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>killer</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Raymonds</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Blackberry</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Woodlands</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>WestSide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>US POLO</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>WES</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Peter Englands</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fruits of the loom</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Flying Machine</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Celo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>westesed</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>parx</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>spykar</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-third">
                    <div className="dropdown-menu-category-brands-third-first h5-tag">
                      <p id="brand_menu" style={{ fontWeight: "300" }}>
                        Footwear
                      </p>
                    </div>

                    <div className="dropdown-menu-category-brands-third-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p id="brand_menu" className="black-giving">
                                Popular Brands
                              </p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>red chief</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Roush</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Toms</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Alberto</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Campus</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Luna</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Regal</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Reebok</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>London</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a></a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Aldo</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>New Ballance</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hush Pupples</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hoka</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Red Tape</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Puma</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Crocs</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Asics</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Woodlnd</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Ctawalk</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Clarks</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Metro</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Mochio</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Bata</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Leone</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Clarks</Link>
                          </div>
                        </div>
                        <div className="third_box_of_brands_extension"></div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-fourth">
                    <div className="dropdown-menu-category-brands-fourth-first h5-tag">
                      <p id="brand_menu" style={{ fontWeight: "300" }}>
                        Jewellery
                      </p>
                    </div>
                    <div className="dropdown-menu-category-brands-fourth-second">
                      <div>
                        <div>
                          <div>
                            <Link style={linkstyle}>
                              <p id="brand_menu" className="black-giving">
                                Popular Brands
                              </p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Mia by Tanisq</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Malabar</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jyalukkas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Jewellery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Chandra </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Wemen hari</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Orra</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Banglore Refinery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Jyalukkas</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>P.C Jewellery</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>shaya</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Fetaured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>MELLORA</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Shaya</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>claar</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Sri Pearls</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tribe</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Izara</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tarash</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ahilya</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Tlisman</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>London</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>real effect</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-menu-category-brands-first">
                    <div className="dropdown-menu-category-brands-first-first h5-tag">
                      <p id="brand_menu" style={{ fontWeight: "300" }}>
                        Watches and Accesories
                      </p>
                    </div>
                    <div className="dropdown-menu-category-brands-first-second">
                      <div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <p id="brand_menu" className="black-giving">
                                Popular Brands
                              </p>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>lavie</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Caprese</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Lino</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Saggit</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Ammerican</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Carlton</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Skybags</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Gio</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Esbeda</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fossil</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Da Milano</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Elle</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Addons</a>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a
                                className="black-giving"
                                style={{ fontWeight: "450" }}
                              >
                                Featured Brands
                              </a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Esbeda</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Fossil</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Da Milano</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Citzens</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Kenneth</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Lenskart</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Casion</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Tommy</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Sonata</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Caprese</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Hide</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>
                              <a>Lino</a>
                            </Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>Timex</Link>
                          </div>
                          <div className="a-a" style={{ fontWeight: "300" }}>
                            <Link style={linkstyle}>kklien</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_lower_box_third">
              <input
                id="right_lower_box_third_input_box_id"
                style={{ borderRadius: "8px" }}
                className={
                  current
                    ? "right_lower_box_third_input_box whiteoninput"
                    : "right_lower_box_third_input_box"
                }
                onChange={(event) => {
                  setText(event.target.value);
                  handinginputbox();
                }}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    navigate(`/products/${text}`);
                    document.getElementById(
                      "right_lower_box_third_input_box_id"
                    ).value = "";
                    //   fn((prev) => !prev);
                    setcurrent(false);
                  }
                }}
                placeholder="Search By Category"
              ></input>

              <div
                className={
                  current ? "hidden_box displayblock" : "hidden_box displayNOne"
                }
              >
                {products.map((elem) => {
                  return (
                    <>
                      {elem.includes(text) ? (
                        <div className="inputdrop">
                          <h1
                            onClick={(ev) => {
                              clickoninputdrop(ev.target.innerText);
                            }}
                          >
                            {elem}
                          </h1>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="fourth_lower_box">
              <div>
                <div>
                  <h1 className="icon_heart">
                    <FontAwesomeIcon icon={faHeart} />
                  </h1>
                </div>
              </div>
              <div>
                <Link to="/cart">
                  <div>
                    <h1 className="icon_heart">
                      <FontAwesomeIcon icon={faFolder} />
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
>>>>>>> c5b12daf9980f8f600a3ee3f535d5c4586d29423
