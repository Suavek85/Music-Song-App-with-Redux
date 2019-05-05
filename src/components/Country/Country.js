import React from "react";
import CountriesList from "./CountriesList";
import CountryList from "./CountryList";

const Country = (props) => {
  return (
    <div>
      <CountriesList countries={props.countries} onCountryFavClick={props.onCountryFavClick} />
      <CountryList
        buttonClick={props.buttonClick}
        searchChange={props.searchChange}
        countryBottom={props.countryBottom}
        onCountryFavClick={props.onSelectedCountryFavClick}
      />
    </div>
  );
};

export default Country;
