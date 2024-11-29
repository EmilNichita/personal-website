import styles from "./ProjectsStyles.module.css";
import viberr from "../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Exscientia/molflux"
          h3="MolFlux"
          p="Foundational package"
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
