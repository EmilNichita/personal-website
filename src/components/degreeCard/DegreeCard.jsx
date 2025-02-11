import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-awesome-reveal";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  const [logoHoverStyle, setLogoHoverStyle] = React.useState({})
  const [degreeTextHoverStyle, setDegreeTextHoverStyle] = React.useState({})
  const [websiteHoverStyle, setWebsiteHoverStyle] = React.useState({})

  return (
    <div className="degree-card">
      <Fade left duration={2000}>
        <div
          className="degree-card-img"
          style={{
            border: `3px solid ${theme.accentColor}`,
            ...logoHoverStyle,
          }}
          onMouseOver={() => setLogoHoverStyle({
            boxShadow: `0 2px 10px ${theme.accentColor}`,
          })}
          onMouseOut={() => setLogoHoverStyle({})}
        >
          <a 
          href={degree.website_link}
          target="_blank"
          rel="noopener noreferrer"
          >
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: degree.logo_style?.transform || "none",
              }}
              src={`assets/images/${degree.logo_path}`}
              alt={degree.alt_name}
            />
          </a>
        </div>
      </Fade>
      <Fade right duration={2000} distance="40px" style={{width: "100%"}}>
        <div
          className="degree-card-body"
          style={{
            borderBottom: `1px solid ${theme.accentColor}`,
            borderLeft: `1px solid ${theme.accentColor}`,
            borderRight: `1px solid ${theme.accentColor}`,
            boxShadow: `0px 1px 5px ${theme.accentColor}`,
            ...degreeTextHoverStyle,
          }}
          onMouseOver={() => setDegreeTextHoverStyle({
            boxShadow: `0 2px 10px ${theme.accentColor}`,
          })}
          onMouseOut={() => setDegreeTextHoverStyle({})}
        >
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            <div className="body-content-list">
            {degree.descriptions.map(([indent, description], index) => (
              <p
                key={index}
                className="content-list"
                style={{ color: theme.text, paddingLeft: `${indent * 15 + 10}px` }}
              >
                {description}
              </p>
            ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
