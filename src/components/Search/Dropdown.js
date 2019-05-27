import React from "react";

const testMusicArr = ["Madonna", "Mamamia", "Malumba", "Genesis", "Metallica"];

export const Dropdown = props => {
  const filteredSongs = testMusicArr.filter(el => {
    return (
      el.slice(0, props.input.length) ===
      props.input.slice(0, props.input.length)
    );
  });

  if (props.input.length > 1 && props.input !== "Justin Bieber") {
    return (
      <article>
        <ul
          style={{ width: "370px", borderTop: "none" }}
          class="list white pl0 mv0 center mw6 ba"
        >
          {filteredSongs.map(el => {
            return (
              <li
                style={{ height: "40px", padding: "10px", borderTop: "none" }}
                class="ph3 pointer bb "
                onClick={() => console.log('add me to input')}
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
