import React from "react";
import "./AchievementCard.css";
import { Fade } from "react-awesome-reveal";

function AchievementCard(props) {
  const { achievement, theme } = props;

  return (
    <Fade bottom duration={2000} distance="20px">
      <div
        className="achievement-card"
        style={{
          boxShadow: `0px 2px 5px ${achievement.color_code}`,
          border: `1px solid ${achievement.color_code}`,
        }}
      >
        <div className="content">
          <a
            href={achievement.achievement_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="achievement-header"
              style={{ backgroundColor: achievement.color_code }}
            >
              <img
                className="logo_img"
                src={`assets/images/${achievement.logo_path}`}
                alt={achievement.alt_name}
              />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Achievement
              </h3>
            </div>
          </a>
        </div>
        <div className="achievement-body">
          <h2 className="achievement-body-title" style={{ color: theme.text }}>
            {achievement.title}
          </h2>
          <h3
            className="achievement-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {achievement.subtitle}
          </h3>
        </div>
      </div>
    </Fade>
  );
}

export default AchievementCard;
