import React from "react";
import Fade from "react-reveal/Fade";
import CountryItemText from "./CountryItemText";

const CountryItem = props => {
  return (
    <Fade
      duration={2000}
      left={props.fadeLeft}
      top={props.fadeTop}
      right={props.fadeRight}
    >
      <div
        className="country_wrapper cover w-60 w-90-m bg-left bg-center-l "
        style={props.wrapperStyle}
      >
        <div className="bg-black-80 pb5 pb6-m pb7-l h-inherit">
          <div style={props.textStyle}>
            {props.button ? (
              <div>
                <div>
                  <input
                    id="specific-country"
                    style={props.textStyle}
                    onChange={props.searchChange}
                    placeholder="Try your country..."
                    required
                  />
                </div>
                <p
                  onClick={props.buttonClick}
                  className="f6 link dim ba bw1 ph4 pv2 mb4 dib hot-pink pointer tracked ttc "
                >
                  Go!
                </p>
              </div>
            ) : (
              <h3>{props.name}</h3>
            )}
          </div>
          {props.message ? <h3>{props.messageText}</h3> : null}
          {props.showSongs ? (
            <div>
              {[0, 1, 2].map(el => {
                return (
                  <CountryItemText
                    wrapperStyle={props.wrapperStyle}
                    circleStyle={props.circleStyle}
                    textStyle={props.textStyle}
                    key={el}
                    number={props.number}
                    name={props.name}
                    topSongs={props.topSongs}
                    fadeTop={props.fadeTop}
                    fadeRight={props.fadeRight}
                    fadeLeft={props.fadeLeft}
                    showSongs={props.showSongs}
                    onCountryFavClick={props.onCountryFavClick}
                    onOpenPopup={props.onOpenPopup}
                    el={el}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </Fade>
  );
};

export default CountryItem;
