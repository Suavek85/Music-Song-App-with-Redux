import React from "react";
import { BlackWindowClose } from "../Icons/Close/Close";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../Animations/Fade.css";

const Signup = () => {
  return (
    <CSSTransition
    in
    classNames="fade"
    appear={true}
    timeout={700}
    unmountOnExit
  >
    <article className="absolute w-5 bg-white tl pa4 black-80"
    style={{ top: "104%", right: "-2%", width: "300px" }}>
    <form className="relative" action="sign-up_submit" method="get" acceptCharset="utf-8">
    <Link to="/Music-Song-App-with-Redux/" style={{ textDecoration: "none" }}>
          <BlackWindowClose />
        </Link>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
          <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
        </div>
        <div class="mt3">
          <label className="db fw4 lh-copy f6" for="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
        </div>
      </fieldset>
      <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" /></div>
    </form>
  </article>
  </CSSTransition>
  );
};

export default Signup;
