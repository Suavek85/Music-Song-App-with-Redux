import React from "react";
import Logo from "../Icons/Logo/Logo";
import RedFavoriteEmpty from "../Icons/FavoriteIcon/FavoriteIcon";
import RedFavoriteFull from "../Icons/FavoriteIconFull/FavoriteIconFull";
import GreyBin from "../Icons/BinIcon/BinIcon";
import { YoutubeIcon } from "../Icons/Youtube/Youtube";
import { youTubeUrl } from "../../containers/API";
import {
  leftStyle,
  secondLeftStyle,
  rightStyle,
  logoStyle
} from "./CardItemStyle";

const CardItem = props => {
  return (
    <article className=" w-20 w-40-m mh3 relative bg-near-white br3 pa2 pa4-ns mv5 ba b--black-10 shadow-4">
      <div
        className="fav-wrapper grow-hov"
        style={leftStyle}
        data-id={props.id}
        onClick={props.onFavClick}
      >
        {props.favClicked ? <RedFavoriteFull /> : <RedFavoriteEmpty />}
      </div>
      <a
        href={youTubeUrl(props.track, props.artist)}
        target="_blank"
        rel="noopener noreferrer"
        className="fav-wrapper grow-hov"
        style={secondLeftStyle}
      >
        <YoutubeIcon />
      </a>

      <div
        onClick={props.removeFavs}
        data-id={props.id}
        className="fav-wrapper grow-hov"
        style={rightStyle}
      >
        {props.addedToFav ? <GreyBin /> : null}
      </div>
      <div className="tc">
        <Logo style={logoStyle} />
        <h1 className="f3 mb2 pb3 dark-red">{props.track}</h1>
        <h2 className="f5 fw4 gray mt0">
          <span className="dark-red">Artist:</span>
          <br />
          {props.artist}
        </h2>
        <h2 className="f5 fw4 gray mt0">
          <span className="dark-red">Album:</span>
          <br />
          {props.album}
        </h2>
      </div>
    </article>
  );
};

export default CardItem;
