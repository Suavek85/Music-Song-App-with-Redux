import React from "react";
import CountryItem from "./CountryItem/CountryItem";

const CountriesList = props => {
  
  
  return (
    <div>
      <h1 id='charts' className="f1 lh-title light-gray">
               <span>Top songs in...</span> 
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
            onOpenPopup={props.onOpenPopup}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;

