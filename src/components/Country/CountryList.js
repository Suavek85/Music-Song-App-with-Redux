import React from "react";
import CountryItem from "./CountryItem/CountryItem";

const CountryList = props => {
  return (
    <div>
        {props.countrySelected.map(el => {
        return (
          <CountryItem
            wrapperStyle={el.wrapperStyle}
            textStyle={el.textStyle}
            circleStyle={el.circleStyle}
            key={el.id}
            name={el.name}
            number={el.number}
            topSongs={el.topSongs}
            fadeTop={el.fadeTop}
            fadeRight={el.fadeRight}
            fadeLeft={el.fadeLeft}
            button={el.button}
            showSongs={el.showSongs}
            searchChange={props.searchChange}
            buttonClick={props.buttonClick}
            onCountryFavClick={props.onCountryFavClick}
          />
        );
    })}
    </div>
  );
};

export default CountryList;
