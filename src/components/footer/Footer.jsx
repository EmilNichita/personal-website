import React from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../../portfolio.jsx";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made by {greeting.title2}
        </p>
        <p
          className="footer-credits"
          style={{ color: props.theme.secondaryText }}
        >
          Original template by - Harikrushn Kanani.
        </p>
      </Fade>
    </div>
  );
}
