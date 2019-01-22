import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Foosball</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Record Books: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
