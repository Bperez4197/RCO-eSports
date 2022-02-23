import React from "react";
import { Link } from "react-scroll";
import "./styles.scss";

export default function Header() {
  return (
    <header>
      <img src={require("../../images/rco-logo.PNG")} alt="RCO Logo" />
      <ul className="home-header">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-75}
        >
          <li>About</li>
        </Link>
        <Link
          to="roster"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-75}
        >
          <li>Roster</li>
        </Link>
        <Link
          to="content"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-75}
        >
          <li>Content</li>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-75}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}
