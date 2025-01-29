import React from "react";
import "./Achievements.css";
import { Fade } from "react-awesome-reveal";
import { achievements } from "../../portfolio";
import AchievementCard from "../../components/achievementCard/AchievementCard";

function Achievements(props) {
  const theme = props.theme;
  return (
    <div className="main" id="achievements">
      <div className="achievements-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="achievements-header" style={{ color: theme.text }}>
            Achievements
          </h1>
        </Fade>
      </div>
      <div className="achievements-body-div">
        {achievements.achievements.map((achievement) => {
          return <AchievementCard achievement={achievement} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Achievements;
