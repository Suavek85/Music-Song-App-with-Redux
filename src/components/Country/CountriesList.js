import React from "react";
import CountryItem from "./CountryItem/CountryItem";

const CountriesList = props => {
  console.log(props.countries)
  
  return (
    <div>
      <h1 id='charts' className="f1 lh-title gray">
                Top Songs in...
        </h1>
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
            onCountryFavClick={props.onCountryFavClick}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;

