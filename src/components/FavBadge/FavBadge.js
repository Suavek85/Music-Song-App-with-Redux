import React from "react";

const FavBadge = props => {
  return (
    <svg style={{marginLeft: "-3px"}} width="30" height="30">
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
        r="9"
        stroke="white"
        strokeWidth="1"
        fill="url(#grad1)"
      />
      <text
        fill="#ffffff"
        fontSize="11"
        fontFamily="Verdana"
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {props.countFavs}
      </text>
    </svg>
  );
};

export default FavBadge;
