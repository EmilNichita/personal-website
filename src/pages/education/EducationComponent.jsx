import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-awesome-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education and Achievements
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                My academic background is heavily focused on Math and Computer Science, having taken part in many contests and olympiads.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
        <h3 className="coming-soon"> *Coming soon!* </h3>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
