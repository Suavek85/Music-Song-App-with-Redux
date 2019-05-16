const musicStateItem = el => {
  return {
    track: "Loading...",
    album: "Loading...",
    artist: "Loading...",
    favClicked: false,
    addedToFav: false,
    id: el
  };
};

const musicStateItemList = [
  musicStateItem(0),
  musicStateItem(1),
  musicStateItem(2)
];


export const musicState = {
  isLoading: true,
  isError: false,
  musicStateItemList: musicStateItemList
}

//try to have is loading inside musicState?
