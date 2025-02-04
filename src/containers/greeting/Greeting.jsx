import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { socialMediaLinks } from "../../portfolio";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Handwave from "./Handwave";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const [buttonHoverStyle, setButtonHoverStyle] = React.useState({})

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
                <span>My name is </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}{""}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  className="button contact-button"
                  style={{
                    backgroundColor: theme.accentColor,
                    ...buttonHoverStyle,
                  }}
                  onMouseOver={() => setButtonHoverStyle({
                    boxShadow: `0 2px 10px ${theme.accentColor}`,
                  })}
                  onMouseOut={() => setButtonHoverStyle({})}
                  onClick={() => {
                    window.location.href = `mailto:${socialMediaLinks.gmail}`
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
