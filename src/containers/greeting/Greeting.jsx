import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Handwave from "./Handwave";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div>
                <h1 className="greeting-text">{greeting.title}</h1>
                <div className="greeting-handwave">
                  <Handwave theme={theme} />
                </div>
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  className="button contact-button"
                  style={{
                    backgroundColor: theme.accentColor,
                  }}
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
