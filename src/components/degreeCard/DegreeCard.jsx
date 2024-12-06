import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  return (
    <div className="degree-card">
      <Flip left duration={2000}>
        <div
          className="degree-card-img"
          style={{
            border: `1px solid ${theme.accentColor}`,
            boxShadow: `0px 0px 5px ${theme.accentColor}`,
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(-50%, -50%)",
            }}
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade right duration={2000} distance="40px">
        <div
          className="degree-card-body"
          style={{
            borderBottom: `1px solid ${theme.accentColor}`,
            borderLeft: `1px solid ${theme.accentColor}`,
            borderRight: `1px solid ${theme.accentColor}`,
            boxShadow: `0px 1px 5px ${theme.accentColor}`,
          }}
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
            {degree.descriptions.map((sentence, index) => (
              <p
                key={index}
                className="content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            ))}
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <p
                className="visit-button"
                style={{
                  backgroundColor: theme.accentColor,
                }}
              >
                Visit Website
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
