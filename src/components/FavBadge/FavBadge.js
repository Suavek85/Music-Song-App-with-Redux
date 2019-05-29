import React from "react";

const FavBadge = props => {
  return (
    <svg width="30" height="30">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(252, 159, 138)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <circle
        cx="15"
        cy="15"
        r="11"
        stroke="white"
        stroke-width="1"
        fill="url(#grad1)"
      />
      <text
        fill="#ffffff"
        font-size="14"
        font-family="Verdana"
        x="50%"
        y="55%"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {props.countFavs}
      </text>
    </svg>
  );
};

export default FavBadge;
