import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

export default function Projects() {
  const [repo, _] = useState([]);

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <ProjectCard repo={v} key={v.node.id + 1} />;
        })}
      </div>
      <a className="resume-btn" href="https://github.com/EmilNichita">
        More Projects (Github)
      </a>
    </div>
  );
}
