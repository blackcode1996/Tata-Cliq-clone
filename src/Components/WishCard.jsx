import React from "react";
import { AiFillDelete } from "react-icons/ai";
export const WishCard = ({ image, title, price }) => {
  // const { image, title, price } = props;
  return (
    <div style={{ borderBottom: "2px solid" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "10px 0",
        }}
      >
        <div style={{ width: "20%" }}>
          <img src={image} alt={title} />
        </div>
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>{title}</p>
            <h4>{price}</h4>
          </div>
        </div>
        <div style={{ height: "40px" }}>
          <AiFillDelete
            style={{ height: "100%", width: "100%", color: "grey" }}
          ></AiFillDelete>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          margin: "0 20px 20px 0",
        }}
      >
        <button
          style={{
            backgroundColor: "#da1c5c",
            color: "#f8fbff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Add To Bag
        </button>
      </div>
    </div>
  );
};
