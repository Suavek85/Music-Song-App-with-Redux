import React from 'react';
import './Header.css';
import Background from './images/music-black-white.jpg';
import PinkMusicIcon from '../Icons/Logo/Logo';
import Search from './Search/Search';
import FavBadge from './FavBadge'

const Header = props => {
  const backImageStyle = {
    backgroundImage: `url(${ Background })`,
  };

  return (
    <header className="sans-serif  ">
      <div className="cover bg-left bg-center-l " style={backImageStyle}>
        <div className="bg-black-80 pb5 pb6-m pb7-l ">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <a href="/" className="dib w3 h3 pa1 grow-large ">
                <PinkMusicIcon />
              </a>
            </div>
            <div className="dtc v-mid tr pa3">
              <div
                onClick={props.showFavs}
                className="relative f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
              >
                Favorite songs
                <FavBadge countFavs={props.countFavs} />
              </div>
              <a
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
                href="#charts"
              >
                Charts
              </a>
              <a
                className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
                href="/"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="h1-clip">SONG FINDER</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">
              Find top 3 tracks of your artist:
            </h2>
            <Search searchChange={props.searchChange} headerSearch={props.headerSearch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
