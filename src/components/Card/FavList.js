import React, {Fragment} from "react";
import CardItem from "./CardItem";
import { GreyWindowClose } from "../Icons/Close/Close";

const FavList = props => {
  if (!props.cardsShow) {
    return (
      <Fragment>
        <h1 className="f1 lh-title gray">
          Your Favorites
          <GreyWindowClose onClick={props.closeFavs}/>
        </h1>
        <div className="flex flex-wrap relative justify-center mb0">
          {props.music.map(el => {
            return (
              <CardItem
                onFavClick={props.onFavClick}
                onOpenPopup={props.onOpenPopup}
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
      </Fragment>
    );
  }
  return null;
};

export default FavList;
