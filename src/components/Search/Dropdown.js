import React from "react";
import { testMusicArr } from "./MusicArtistsList";

export const Dropdown = props => {
  let filteredSongs = testMusicArr.filter(el => {
    return (
      el.slice(0, props.input.length).toUpperCase() ===
      props.input.slice(0, props.input.length).toUpperCase()
    );
  });

  if (
    props.input.length > 1 &&
    //props.input !== "Justin Bieber" &&
    props.autocompleteShow &&
    filteredSongs.length
  ) {
    return (
      <article>
        <ul
          style={{ width: "370px", borderTop: "none", borderBottom: "none" }}
          class="list white pl0 mv0 center mw6 ba"
        >
          {filteredSongs.map(el => {
            return (
              <li
                style={{ height: "40px", padding: "10px", borderTop: "none" }}
                className="ph3 pointer bb bg-white black grey-back"
                onClick={props.onAutocomplete}
              >
                <span style={{color: 'red'}}>{el.slice(0, props.input.length)}</span>
                {el.slice(props.input.length)}
              </li>
            );
          })}
        </ul>
      </article>
    );
  } else {
    return null;
  }
};
