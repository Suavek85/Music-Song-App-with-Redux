import React from "react";
import Logo from "../Icons/Logo/Logo";
import RedFavoriteEmpty from "../Icons/FavoriteIcon/FavoriteIcon";
import RedFavoriteFull from "../Icons/FavoriteIconFull/FavoriteIconFull";
import GreyBin from "../Icons/BinIcon/BinIcon";
import { YoutubeIcon } from "../Icons/Youtube/Youtube";
//import { SearchDefault } from "../Icons/Search/Search";
import { youTubeSearchUrl } from "../../containers/API";
import {
  rightStyle,
  logoStyle,
  iconStyle,
  iconsLeftWrapperStyle
} from "./CardItemStyle";
import { CSSTransition } from "react-transition-group";
import "../Animations/Fade.css";
import "./CardItem.css";

const CardItem = props => {
  return (
    <CSSTransition
      in
      classNames="fade"
      appear={true}
      timeout={700}
      unmountOnExit
    >
      <article className="mh3 relative bg-near-white br3 pa2 pa4-ns mv5 ba b--black-10 shadow-4">
        <div style={iconsLeftWrapperStyle}>
          <div
            className="fav-wrapper grow-hov"
            style={iconStyle}
            data-id={props.id}
            onClick={props.onFavClick}
          >
            {props.favClicked ? <RedFavoriteFull /> : <RedFavoriteEmpty />}
          </div>
          { /*
          <div
          style={iconStyle}
          className="fav-wrapper grow-hov"
          onClick={props.onOpenPopup}
        >
          <YoutubeIcon />
        </div>
          */}

          <div className="grow-hov" style={iconStyle}>
            <a
              href={youTubeSearchUrl(props.track, props.artist)}
              target="_blank"
              rel="noopener noreferrer"
              className="fav-wrapper grow-hov"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div
          onClick={props.removeFavs}
          data-id={props.id}
          className="fav-wrapper grow-hov"
          style={rightStyle}
        >
          {props.addedToFav ? <GreyBin /> : null}
        </div>
        <div className="tc pa3">
          <Logo style={logoStyle} />
          <p className="f3 mb2 pb3 dark-red">{props.track}</p>
          <p className="f5 fw4 gray mt0">
            <span className="dark-red">
              Artist:
              <br />
            </span>
            <span>{props.artist} </span>
          </p>
          <p className="f5 fw4 gray mt0">
            <span className="dark-red">Album:</span>
            <br />
            {props.album}
          </p>
        </div>
      </article>
    </CSSTransition>
  );
};

export default CardItem;
