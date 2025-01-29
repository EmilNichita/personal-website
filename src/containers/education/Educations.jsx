import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../portfolio.jsx";
import { Fade } from "react-awesome-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-body-div">
        {degrees.degrees.map((degree, idx) => {
          return <DegreeCard key={idx} degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
