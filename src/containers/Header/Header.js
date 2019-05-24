import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import "./Header.css";
import Background from "../../components/Images/music-black-white.jpg";
import PinkMusicIcon from "../../components/Icons/Logo/Logo";
import DefaultUser from "../../components/Icons/Profile/Profile";
import Search from "../../components/Search/Search";
import Signin from "../../components/Signin/Signin";
import Signup from "../../components/Signin/Signup";
import FavBadge from "../../components/FavBadge/FavBadge";
import scrollDownSmooth from "../../components/Animations/Animations";

import { connect } from "react-redux";
import {
  setInput,
  requestMusic,
  requestSpecificMusic,
  isCardShow,
  activateLoading
} from "../../actions";

const mapStateToProps = state => {
  return {
    input: state.searchMusic.input,
    inputCountry: state.searchCountry.inputCountry,
    musicStateItemList: state.handleMusicCards.musicStateItemList,
    cardShow: state.isCardShow.cardShow,
    favsArray: state.handleFavs.favsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setInput(event.target.value)),
    onRequestMusic: () => dispatch(requestMusic()),
    onRequestSpecificMusic: input => dispatch(requestSpecificMusic(input)),
    onCardShow: text => dispatch(isCardShow(text)),
    onActivateLoading: () => dispatch(activateLoading())
  };
};

class Header extends Component {
  onHeaderSearch = () => {
    this.props.onActivateLoading();
    this.props.onCardShow(true);
    this.props.onRequestSpecificMusic(this.props.input);
    scrollDownSmooth();
  };

  onShowFavs = () => {
    if (this.props.favsArray.length === 0) {
      return;
    }
    this.props.onCardShow(false);
    scrollDownSmooth();
  };

  render() {
    const backImageStyle = {
      backgroundImage: `url(${Background})`
    };
    const { favsArray, onSearchChange } = this.props;

    return (
      <Router>
        <header className="sans-serif mb5">
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
                    onClick={this.onShowFavs}
                    className="relative f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
                  >
                    Favorite songs
                    <FavBadge countFavs={favsArray.length} />
                  </div>
                  <a
                    className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 pointer"
                    href="#charts"
                  >
                    Charts
                  </a>
                  <div
                    className="relative dib "
                    
                  >
                    <span>
                      <Link
                        to="/Music-Song-App-with-Redux/signin/"
                        style={{ textDecoration: "none" }}
                      >
                        <DefaultUser />
                      </Link>
                    </span>
                    <Route path="/Music-Song-App-with-Redux/signin/" component={Signin} />
                    <Route path="/Music-Song-App-with-Redux/signup/" component={Signup} />
                    <Route path="/Music-Song-App-with-Redux/" />
                  </div>
                </div>
              </nav>
              <div className="tc-l mt4 mt5-m mt6-l ph3">
                <h1 className="h1-clip">SONG FINDER</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">
                  Find top 3 tracks of your artist:
                </h2>
                <Search
                  searchChange={onSearchChange}
                  headerSearch={this.onHeaderSearch}
                />
              </div>
            </div>
          </div>
        </header>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
