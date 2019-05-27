import React from "react";
import "./Search.css";
import { Dropdown } from "./Dropdown";

const Search = props => {
  return (
    <div
      className="flex flex-column items-start"
      style={{
        width: "500px",
        margin: "auto"
      }}
    >
      <form className="search white-70 mw6" autoComplete="off" action="">
        <input
          type="search"
          onChange={props.searchChange}
          placeholder="Justin Bieber"
          id="search-input"
          required
        />
        <button type="button" onClick={props.headerSearch}>
          Search
        </button>
      </form>
      <Dropdown input={props.input} onAutocomplete={props.onAutocomplete} autocompleteShow={props.autocompleteShow} />
    </div>
  );
};

export default Search;
