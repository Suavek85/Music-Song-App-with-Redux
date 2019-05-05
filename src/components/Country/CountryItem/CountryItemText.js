import React from "react";
import RedFavoriteFull from "../../Icons/FavoriteIconFull/FavoriteIconFull";
import RedFavoriteEmpty from "../../Icons/FavoriteIcon/FavoriteIcon";
import { YoutubeIconWhite } from "../../Icons/Youtube/Youtube";
import { youTubeUrl } from "../../../containers/API";

const CountryItemText = props => {
  return (
    <div className="mb4 ml5 tl flex items-center ">
      <span style={props.circleStyle}>{props.el + 1}</span>
      <span className="white pl3 pr1 washed-red">
        {props.topSongs[props.el].track}
      </span>
      <span className="white pr1"> by </span>
      <span className="white lightest-blue pr2">
        {props.topSongs[props.el].artist}
      </span>
      <span
        className="fav-wrapper grow-hov dib"
        onClick={props.onCountryFavClick}
        data-no={props.topSongs[props.el].number}
        data-id={props.topSongs[props.el].id}
      >
        {props.topSongs[props.el].favClicked ? (
          <RedFavoriteFull />
        ) : (
          <RedFavoriteEmpty />
        )}
      </span>
      <a
        href={youTubeUrl(
          props.topSongs[props.el].track,
          props.topSongs[props.el].artist
        )}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "5px" }}
        className="fav-wrapper grow-hov"
      >
        <YoutubeIconWhite />
      </a>
    </div>
  );
};

export default CountryItemText;
