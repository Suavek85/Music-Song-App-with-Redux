import React, { Fragment } from "react";
import CardItem from "./CardItem";

const CardList = props => {
  if (props.cardsShow) {
    return (
      <Fragment>
        {props.isError ? (
          <h1 className="f1 lh-title light-gray">
            Oops an error. Try reloading the page.
          </h1>
        ) : (
          <h1 className="f1 lh-title light-gray">
            <span>Top songs by "{props.input}"</span>
          </h1>
        )}
        <div className="flex flex-wrap relative justify-center">
          {props.music.map(el => {
            return (
              <CardItem
                onFavClick={props.onFavClick}
                onOpenPopup={props.onOpenPopup}
                key={el.id}
                id={el.id}
                track={el.track}
                album={el.album}
                artist={el.artist}
                favClicked={el.favClicked}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
  return null;
};

export default CardList;
