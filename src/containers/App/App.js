import React, { Component } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import Country from "../Country/Country";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Animations/Spinner/Spinner";
import "./App.css";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isLoading: state.handleMusicCards.isLoading
  };
};

class App extends Component {
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

export default connect(mapStateToProps)(App);
