import React from "react";

const testMusicArr = [
  "Madonna",
  "Britney Spears",
  "Malumba",
  "Genesis",
  "Metallica",
  "Elvis Presley",
  "Taylor Swift",
  "Eminem",
  "Elton John",
  "Nirvana"
];

export const Dropdown = props => {
  let filteredSongs = testMusicArr.filter(el => {
    return (
      el.slice(0, props.input.length) ===
      props.input.slice(0, props.input.length)
    );
  });

  if (
    props.input.length > 1 &&
    props.input !== "Justin Bieber" &&
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
                class="ph3 pointer bb bg-white black"
                onClick={props.onAutocomplete}
              >
                {el}
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
