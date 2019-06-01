import React from "react";
import { TimelineMax } from "gsap/all";
import { Power2, Bounce, Circ } from "gsap/TweenMax";

export const animateLogo = () => {
  var tl = new TimelineMax();
  tl.delay(1.5)
    .from("#background", 1.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Power2.easeOut
    })
    .from("#black-string", 0.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Bounce.easeOut
    })
    .from("#red-string", 0.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Bounce.easeOut
    })

    .from("#left-string1", 0.5, {
      scaleX: 0,
      transformOrigin: "center",
      ease: Bounce.easeOut
    })
    .from("#left-string2", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.4
    })
    .from("#left-string3", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.4
    })

    .from("#right-string1", 0.5, {
      scaleX: 0,
      transformOrigin: "center",
      ease: Bounce.easeOut
    })
    .from("#right-string2", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.4
    })
    .from("#right-string3", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.4
    });
};

const MusicPlayer = () => {
  return (
    <svg
      id="background"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 473.935 473.935"
      style={{ width: "45px", heght: "45px" }}
    >
      <circle cx="236.967" cy="236.967" r="236.967" fill="#feffb1" />
      <path
        id="black-string"
        d="M237.308,145.915c72.965,0,132.197,86.076,133.241,176.654h17.972	c-1.044-102.888-68.325-198.985-151.213-198.985c-82.881,0-150.162,96.097-151.206,198.985h17.972	C105.118,231.991,164.351,145.915,237.308,145.915z"
        fill="#505251"
      />
      <g fill="#e84849">
        <path
          id="red-string"
          d="M237.308,123.588c78.042,0,142.225,85.189,150.338,181.016h0.876 C387.477,201.72,353.094,99.487,238.696,99.487c-110.592,0-151.55,102.233-152.594,205.117h0.876 C95.09,208.773,159.273,123.588,237.308,123.588z"
        />
        <path
          id="left-string1"
          d="M165.93,302.022c7.237,34.686,11.147,54.81-19.865,68.879 c-30.279,13.747-59.794-14.907-67.038-49.586c-7.237-34.69,8.812-68.157,40.83-76.003 C151.883,237.488,158.689,267.34,165.93,302.022z"
        />
      </g>
      <path
        id="left-string2"
        d="M165.93,302.022c7.237,34.686,11.248,54.784-7.6,65.882	c-18.417,10.836-46.181-120.695-26.215-125.586C152.089,237.428,158.689,267.34,165.93,302.022z"
        fill="#404040"
      />
      <path
        id="left-string3"
        d="M162.203,302.307c4.853,23.263,7.551,36.748-5.093,44.194c-12.359,7.27-30.978-80.961-17.583-84.246	C152.919,258.98,157.35,279.048,162.203,302.307z"
        fill="#30302f"
      />
      <path
        id="right-string1"
        d="M307.987,302.022c-7.237,34.686-11.147,54.81,19.865,68.879	c30.271,13.747,59.794-14.907,67.038-49.586c7.237-34.69-8.812-68.157-40.838-76.003	C322.033,237.488,315.227,267.34,307.987,302.022z"
        fill="#e84849"
      />
      <path
        id="right-string2"
        d="M307.987,302.022c-7.237,34.686-11.248,54.784,7.6,65.882	c18.417,10.836,46.181-120.695,26.207-125.586C321.82,237.428,315.227,267.34,307.987,302.022z"
        fill="#404040"
      />
      <path
        id="right-string3"
        d="M311.167,302.307c-4.853,23.263-7.551,36.748,5.093,44.194c12.352,7.27,30.978-80.961,17.583-84.246	C320.447,258.98,316.016,279.048,311.167,302.307z"
        fill="#30302f"
      />
    </svg>
  );
};

export default MusicPlayer;
