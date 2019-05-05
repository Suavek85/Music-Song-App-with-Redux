import React from "react";

const FavBadge = ( props ) => {
  const wrapperStyle = {
    width: "18px",
    height: "18px",
    top: "-5%",
    right: "-3%",
    backgroundImage: "linear-gradient(to bottom, #fc9f8a, #fa623f)"
  };

  const numbStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    border: "0,5px solid transparent",
    textShadow: "0 1px rgba(0, 0, 0, 0.25)",
    color: "white"
  };

  return (
    <div
      style={wrapperStyle}
      className="tc br-100 db absolute pa1 br-100 ba"
    >
      <span className="f8" style={numbStyle}>
        {props.countFavs}
      </span>
    </div>
  );
};

export default FavBadge;
