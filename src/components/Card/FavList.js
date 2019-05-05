import React from "react";
import CardItem from "./CardItem";
import GreyWindowClose from "../Icons/Close/Close";

const FavList = props => {
  if (!props.cardsShow) {
    return (
      <div>
        <h1 className="f1 lh-title gray">
          Your Favorites
          <GreyWindowClose onClick={props.closeFavs}/>
        </h1>
        <div className="flex flex-wrap relative justify-center mb0">
          {props.music.map(el => {
            return (
              <CardItem
                onFavClick={props.onFavClick}
                removeFavs={props.removeFavs}
                key={el.id}
                id={el.id}
                track={el.track}
                album={el.album}
                artist={el.artist}
                favClicked={el.favClicked}
                addedToFav={el.addedToFav}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default FavList;
