import React from 'react';
import './Search.css';


const Search = props => {
  return (
    <form className="search white-70" action="">
      <input type="search" onChange={props.searchChange} placeholder="Justin Bieber" required />
      <button type="button" onClick={props.headerSearch}>Search</button>
    </form>  
  );
}

export default Search;