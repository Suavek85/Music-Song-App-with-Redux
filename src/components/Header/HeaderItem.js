import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Background from "../Images/music-black-white.jpg";
import DefaultUser from "../Icons/Profile/Profile";
import Search from "../Search/Search";
import Signin from "../Signin/Signin";
import Signup from "../Signin/Signup";
import FavBadge from "../FavBadge/FavBadge";
import MusicPlayer from "../Icons/MusicPlayer/MusicPlayer";
import "../Animations/Fade.css";

const HeaderItem = props => {
  const backImageStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };
  const { favsArray, onSearchChange, headerSearch, onShowFavs, input } = props;
  return (
    <Router>
      <header className="sans-serif mb5 h-auto w-100">
        <div
          className="cover bg-left bg-center-l h-inherit"
          style={backImageStyle}
        >
          <div className="bg-black-80 pb5 pb6-m pb7-l h-inherit">
            <nav className="dt mw8 center flex items-center justify-between">
              <div className="dtc w2 v-mid pa3">
                <MusicPlayer />
              </div>
              <div className="dtc v-mid tr pa3 flex items-end justify-end">
                <div
                  onClick={onShowFavs}
                  className="relative f6 fw4 hover-white no-underline white-70 dib-ns pv2 pointer"
                >
                  FAV SONGS
                  <FavBadge countFavs={favsArray.length} />
                </div>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dib-ns pv2 ph3 pointer "
                  href="#charts"
                >
                  CHARTS
                </a>
                <div className="relative dib ">
                  <span>
                    <Link
                      to="/Music-Song-App-with-Redux/signin/"
                      style={{ textDecoration: "none" }}
                    >
                      <DefaultUser />
                    </Link>
                  </span>
                  <Route
                    path="/Music-Song-App-with-Redux/signin/"
                    component={Signin}
                  />
                  <Route
                    path="/Music-Song-App-with-Redux/signup/"
                    component={Signup}
                  />
                  <Route path="/Music-Song-App-with-Redux/" />
                </div>
              </div>
            </nav>
            <div className="flex flex-column items-center justify-center tc-l mt4 mt5-m mt6-l ph3">
              <CSSTransition
                in
                classNames="fade"
                appear={true}
                timeout={700}
                unmountOnExit
              >
                <h1 className="h1-clip">SONG FINDER</h1>
              </CSSTransition>

              <p
                style={{ letterSpacing: "1.1px" }}
                className="fw1 f3 washed-yellow mt3 mb4"
              >
                Find top 3 tracks of your artist:
              </p>

              <Search
                searchChange={onSearchChange}
                headerSearch={headerSearch}
                input={input}
                onAutocomplete={props.onAutocomplete}
                autocompleteShow={props.autocompleteShow}
              />
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default HeaderItem;
