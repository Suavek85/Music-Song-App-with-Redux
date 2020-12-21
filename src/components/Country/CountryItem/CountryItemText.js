import React from "react";
import RedFavoriteFull from "../../Icons/FavoriteIconFull/FavoriteIconFull";
import RedFavoriteEmpty from "../../Icons/FavoriteIcon/FavoriteIcon";
import { YoutubeIconWhite } from "../../Icons/Youtube/Youtube";
//import { StyledSearchDefault } from "../../Icons/Search/Search";
import { youTubeSearchUrl } from "../../../containers/API";

const CountryItemText = props => {
  const trackString = props.topSongs[props.el].track;
  const artistString = props.topSongs[props.el].artist;

  const stylesText = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }

  const stylesWrapper = {
    display: 'flex',
    maxWidth: 'calc(100% - 106px)'
  }

  return (
    <div className="country__song-line mb4 ml3 tl flex items-center f4">
      <div style={stylesWrapper}> 
        <div className="country__line-breaker">
          <span style={props.circleStyle}>{props.el + 1}</span>
        </div>
        <span style={stylesText} className="white pl3 pr1 washed-red">
          {props.topSongs[props.el].track.slice(0,20)}
          {trackString.length > 19 ? '...' : null}
        </span>
        <span className="white pr1"> by </span>
        <span style={stylesText} className="white lightest-blue pr2 country__line-breaker">
          {props.topSongs[props.el].artist.slice(0,20)}
          {artistString.length > 19 ? '...' : null}
        </span>
      </div>
      <div style={{display: 'flex'}}> 
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
        { /*
                  <div className="fav-wrapper grow-hov ml2" onClick={props.onOpenPopup}>
                  <YoutubeIconWhite />
                </div>
        */}

        <div className="grow-hov ml2">
          <a
            href={youTubeSearchUrl(
              props.topSongs[props.el].track,
              props.topSongs[props.el].artist
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="fav-wrapper grow-hov"
          >
            <YoutubeIconWhite/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryItemText;
