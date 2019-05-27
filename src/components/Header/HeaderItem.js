import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Background from "../Images/music-black-white.jpg";
import PinkMusicIcon from "../Icons/Logo/Logo";
import DefaultUser from "../Icons/Profile/Profile";
import Search from "../Search/Search";
import Signin from "../Signin/Signin";
import Signup from "../Signin/Signup";
import FavBadge from "../FavBadge/FavBadge";
import "./Header.css";
import "../Animations/Fade.css";


const HeaderItem = props => {
  
  const backImageStyle = {
    backgroundImage: `url(${Background})`
  };
  const { favsArray, onSearchChange, headerSearch, onShowFavs, input } = props;
  return (
    <Router>
      <header className="sans-serif mb5 vh-100">
        <div className="cover bg-left bg-center-l h-inherit" style={backImageStyle}>
          <div className="bg-black-80 pb5 pb6-m pb7-l h-inherit">
            <nav className="dt w-100 mw8 center">
              <div className="dtc w2 v-mid pa3">
                <a href="/" className="dib w3 h3 pa1 grow-large ">
                  <PinkMusicIcon />
                </a>
              </div>
              <div className="dtc v-mid tr pa3">
                <div
                  onClick={onShowFavs}
                  className="relative f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
                >
                  FAV SONGS
                  <FavBadge countFavs={favsArray.length} />
                </div>
                <a
                  className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
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
            <div className="tc-l mt4 mt5-m mt6-l ph3">
              <CSSTransition
                in
                classNames="fade"
                appear={true}
                timeout={700}
                unmountOnExit
              >
                <h1 className="h1-clip">SONG FINDER</h1>
              </CSSTransition>

              <h2 className="fw1 f3 washed-yellow mt3 mb4">
                Find top 3 tracks of your artist:
              </h2>
              <Search
                searchChange={onSearchChange}
                headerSearch={headerSearch}
                input={input}
                onAutocomplete={props.onAutocomplete}
              />
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default HeaderItem;
