import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import MLResearchImg from "./MLResearchImg";
import SoftwareEngineerImg from "./SoftwareEngineerImg";

function GetSkillSvg(props) {
  if (props.fileName === "MLResearchImg")
    return <MLResearchImg theme={props.theme} />;
  else if (props.fileName === "SoftwareEngineerImg")
    return <SoftwareEngineerImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        // Ensure each main skill block has a unique key
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={`skill-block-${index}`}>
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{
                      color: theme.text,
                      lineHeight: "1.0em",
                      marginBlockStart: "0.0em",
                      marginBlockEnd: "0.0em",
                    }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, sentenceIndex) => (
                      <p
                        key={`skill-sentence-${index}-${sentenceIndex}`} // Unique key for each sentence
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        <b>○</b> {skillSentence}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div" key={`skill-block-${index}`}>
              <div className="skills-text-div">
                <Fade left duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, sentenceIndex) => (
                      <p
                        key={`skill-sentence-${index}-${sentenceIndex}`} // Unique key for each sentence
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        <b>○</b> {skillSentence}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
