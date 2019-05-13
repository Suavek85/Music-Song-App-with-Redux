import React, { Component } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import Country from "../Country/Country";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Animations/Spinner/Spinner";
import "./App.css";

import { connect } from "react-redux";
import {
  requestMusic,
  isCardShow,
} from "../../actions";

const mapStateToProps = state => {
  return {
    isLoading: state.handleMusicCards.isLoading,
    cardShow: state.isCardShow.cardShow,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMusic: () => dispatch(requestMusic()),
    onCardShow: text => dispatch(isCardShow(text)),
  };
};

class App extends Component {

  componentDidMount() {
    this.props.onRequestMusic();
    this.props.onCardShow(true);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <Header />
        <Spinner loading={isLoading} />
        <Card />
        <Country />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
