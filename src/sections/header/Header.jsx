import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink, Link } from "react-dom";

function Header(props) {
  const link = "home";

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header>
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
