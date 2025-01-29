import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PapersImg from "./PapersImg.jsx";
import { Fade } from "react-awesome-reveal";
import "./PapersComponent.css";
import { papersPageData, papers } from "../../portfolio.jsx";


function Papers(props) {
  const theme = props.theme;

  return (
    <div className="papers-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-papers">
        <h1>Coming Soon!</h1>
        <Fade bottom duration={1000} distance="40px">
          <div className="papers-heading-div">
            <div className="papers-heading-img-div">
              <img
                className="papers-pic"
                src={`../../assets/images/${papersPageData["profile_image_path"]}`}
                alt=""
              />
            </div>
            <div className="papers-heading-text-div">
              <h1
                className="papers-heading-text"
                style={{ color: theme.text }}
              >
                {papersPageData["title"]}
              </h1>
              <p
                className="papers-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {papersPageData["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Papers;
