import React from "react";
import Background from "./images/music-black-white-rotate.jpg";
import { svgStyle } from "./FooterSvg";

const Footer = () => {
  const backImageStyle = {
    backgroundImage: `url(${Background})`
  };

  return (
    <footer style={backImageStyle} className="tc-l bg-center cover bg-black">
      <div className="w-100 ph3 pv5 bg-black-80">
        {svgStyle.map(el => {
          return (
            <a
              className="link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2"
              href="https://www.youtube.com/"
              title={el.name}
            >
              <svg
                className="dib h2 w2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
              >
                <path d={el.svgPath} />
              </svg>
              <span className="f6 ml3 pr2">{el.name}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
