import React, { Fragment } from "react";
import CountryItem from "./CountryItem/CountryItem";

const CountriesList = props => {
  return (
    <Fragment>
      <h2 id="charts" className="lh-title light-gray">
        <span>Top songs in...</span>
      </h2>
      {props.countries.map(el => {
        return (
          <CountryItem
            wrapperStyle={el.wrapperStyle}
            circleStyle={el.circleStyle}
            textStyle={el.textStyle}
            key={el.id}
            number={el.number}
            name={el.name}
            topSongs={el.topSongs}
            fadeTop={el.fadeTop}
            fadeRight={el.fadeRight}
            fadeLeft={el.fadeLeft}
            showSongs={el.showSongs}
            message={el.message}
            messageText={el.messageText}
            onCountryFavClick={props.onCountryFavClick}
            onOpenPopup={props.onOpenPopup}
          />
        );
      })}
    </Fragment>
  );
};

export default CountriesList;
