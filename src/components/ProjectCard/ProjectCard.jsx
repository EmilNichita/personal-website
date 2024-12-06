import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-awesome-reveal";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="project-card"
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{
            backgroundColor: theme.projectCard,
            boxShadow: `0px 10px 30px -15px rgba(0, 0, 0, 0.2)`,
          }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="flexDiv">
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="repo-details Rightitem">
              <ProjectLinks logos={repo.links} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
