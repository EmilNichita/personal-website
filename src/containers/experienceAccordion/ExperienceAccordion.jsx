import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.jsx";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const [accordionHoverStyle, setAccordionHoverStyle] = React.useState({})

  return (
    <div 
      className="experience-accord"
      style={{
        border: `2px solid ${theme.accentColor}`,
        ...accordionHoverStyle,
      }}
      onMouseOver={() => setAccordionHoverStyle({
        boxShadow: `0 2px 10px ${theme.accentColor}`,
      })}
      onMouseOut={() => setAccordionHoverStyle({})}
    >
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
