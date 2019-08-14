import React from "react";
import { BlackWindowClose } from "../Icons/Close/Close";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../Animations/Fade.css";

const Signin = () => {
  return (
    <CSSTransition
      in
      classNames="fade"
      appear={true}
      timeout={700}
      unmountOnExit
    >
      <main
        className="absolute w-5 bg-white tl pa4 black-80"
        style={{ top: "104%", right: "-2%", width: "300px" }}
      >
        <form className="relative measure center">
          <Link
            to="/Music-Song-App-with-Redux/"
            style={{ textDecoration: "none" }}
          >
            <BlackWindowClose />
          </Link>

          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <Link
              to="/Music-Song-App-with-Redux/signup/"
              className="f6 link dim black db"
              style={{ textDecoration: "none" }}
            >
              Sign up
            </Link>
            <a href="#0" className="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </main>
    </CSSTransition>
  );
};

export default Signin;
