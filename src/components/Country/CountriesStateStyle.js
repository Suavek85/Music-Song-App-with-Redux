import BrazilBck from "./images/brazil.jpg";
import UsaBck from "./images/usa.jpg";
import EsBck from "./images/spain.jpg";
import GenBck from "./images/generic.jpg";

const wrapper = {
  height: "380px",
  backgroundAttachment: "fixed",
};

const wrapperBrazil = {
  ...{ backgroundImage: `url(${BrazilBck})`, margin: "100px auto 50px auto" },
  ...wrapper
};

const wrapperUsa = {
  ...{
    backgroundImage: `url(${UsaBck})`,
    margin: "50px auto 50px auto"
  },
  ...wrapper
};

const wrapperEs = {
  ...{
    backgroundImage: `url(${EsBck})`,
    margin: "50px auto 80px auto"
  },
  ...wrapper
};

const wrapperRandom = {
  height: "400px",
  backgroundImage: `url(${GenBck})`,
  backgroundAttachment: "fixed",
  margin: "50px auto 80px auto"
};

const text = {
  paddingTop: "15px",
  marginBottom: "30px",
  color: "pink",
  lineHeight: "1, 5"
};

const textBr = {
  ...{ letterSpacing: "5px" },
  ...text
};

const textUsa = {
  ...{ letterSpacing: "7px" },
  ...text
};

const textEs = {
  ...{ letterSpacing: "5px" },
  ...text
};

const textXx = {
  backgroundColor: "transparent",
  color: "pink",
  border: "none",
  width: "90%",
  textAlign: "center",
  outline: "none",
  fontWeight: "100",
  fontSize: "3rem",
  paddingTop: "20px",
  margin: "auto"
};

const numberCircle = {
  paddingTop: "6px",
  paddingBottom: "5px",
  paddingLeft: "13px",
  paddingRight: "13px",
  color: "white",
  fontSize: "18px",
  borderRadius: "50%",
  border: "1px solid white"
};

export const countriesMain = [
  {
    name: "Brazil",
    id: 0,
    code: "BR",
    topSongs: [
      {
        artist: "Lady Gaga feat. Bradley Cooper",
        track: "Shallow",
        album: "A Star Is Born Soundtrack",
        id: 158988975,
        number: 11,
        favClicked: false
      },
      {
        artist: "Melim",
        track: "Meu Abrigo",
        album: "Melim",
        id: 142894014,
        number: 12,
        favClicked: false
      },
      {
        artist: "Lady Gaga",
        track: "Always Remember Us This Way",
        album: "A Star Is Born Soundtrack",
        id: 158988985,
        number: 13,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperBrazil,
    textStyle: textBr,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: false,
    fadeLeft: true,
    button: false,
    showSongs: true,
    message: false,
    messageText: "Error"
  },
  {
    name: "USA",
    id: 1,
    code: "US",
    topSongs: [
      {
        artist: "Lil Nas X feat. Billy Ray Cyrus",
        track: "Old Town Road (Remix)",
        album: "Old Town Road (Remix)",
        id: 17640248,
        number: 21,
        favClicked: false
      },
      {
        artist: "Blake Shelton",
        track: "God's Country",
        album: "God's Country",
        id: 167306431,
        number: 22,
        favClicked: false
      },
      {
        artist: "Florence + The Machine",
        track: "Jenny of Oldstones (Game of Thrones)",
        album: "Jenny of Oldstones (Game of Thrones)",
        id: 168716837,
        number: 23,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperUsa,
    textStyle: textUsa,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: true,
    fadeLeft: false,
    button: false,
    showSongs: true,
    message: false,
    messageText: "Error"
  },
  {
    name: "Spain",
    id: 2,
    code: "ES",
    topSongs: [
      {
        artist: "Luis Fonsi feat. Sebastian Yatra & Nicky Jam",
        track: "Date La Vuelta",
        album: "Date La Vuelta",
        id: 168814808,
        number: 31,
        favClicked: false
      },
      {
        artist: "ROSAL feat. J Balvin & El Guincho",
        track: "Con Altura",
        album: "Con Altura",
        id: 167497251,
        number: 32,
        favClicked: false
      },
      {
        artist: "Alejandro Sanz feat. Camila Cabello",
        track: "Mi Persona Favorita",
        album: "#ELDISCO",
        id: 167332228,
        number: 33,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperEs,
    textStyle: textEs,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: false,
    fadeLeft: true,
    button: false,
    showSongs: true,
    message: false,
    messageText: "Error"
  }
];

export const countrySelected = [
  {
    name: "",
    id: 0,
    code: "",
    topSongs: [
      {
        artist: "Loading...",
        track: "Loading...",
        album: "Loading...",
        id: 0,
        number: 41,
        favClicked: false
      },
      {
        artist: "Loading...",
        track: "Loading...",
        album: "Loading...",
        id: 0,
        number: 42,
        favClicked: false
      },
      {
        artist: "Loading...",
        track: "Loading...",
        album: "Loading...",
        id: 0,
        number: 43,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperRandom,
    textStyle: textXx,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: true,
    fadeLeft: false,
    button: true,
    showSongs: false,
    message: false,
    messageText: "Error"
  }
];
