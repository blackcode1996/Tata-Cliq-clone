import React, { useEffect, useState } from "react";
import styles from "../styles/Wishlist.module.css";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { WishCard } from "../Components/WishCard";
export const Wishlist = () => {
  const [wishData, setWishData] = useState([
    {
      image:
        "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015550857_437Wx649H_202212030106481.jpeg",
      title: "Kurti",
      price: "300",
      id: 1,
    },
    {
      image:
        "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015550857_437Wx649H_202212030106481.jpeg",
      title: "Kurti",
      price: "300",
      id: 2,
    },
    {
      image:
        "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015550857_437Wx649H_202212030106481.jpeg",
      title: "Kurti",
      price: "300",
      id: 3,
    },
  ]);
  useEffect(() => {});
  return (
    <>
      <Navbar />
      <div>
        <div id="section_A" className={styles.sectionA}>
          <div id="sidebar_1A" className={styles.sidebar1A}>
            <div id="menu" className={styles.menumain}>
              <div className={styles.menuhead}>
                <h1>Menu</h1>
              </div>
              <div id="section_A1" className={styles.menuitems}>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/WL6.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>My Wishlist</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/general/components/img/order-history.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Order History</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Neu Pass</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="	https://www.tatacliq.com/src/account/components/img/addressbook.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Address Book</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="	https://www.tatacliq.com/src/account/components/img/brand.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Brands</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/card.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Saved Payment</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/alert.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>
                    Alerts & Coupons
                  </button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Gift Card</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>CliQ Cash</button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>
                    Manage Notifications
                  </button>
                </div>
                <div className={styles.menucard}>
                  <div className={styles.menuimage}>
                    <img
                      src="https://www.tatacliq.com/src/account/components/img/settings.svg"
                      alt=""
                    />
                  </div>
                  <button className={styles.menubutton}>Profile</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionB}>
            {wishData.length > 0 &&
              wishData.map((el) => {
                return <WishCard key={el.id} {...el} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
