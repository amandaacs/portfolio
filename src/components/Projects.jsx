import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.titleBar}>
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.bar}></div>
      </div>
      
      <div className={styles.projects}>
        {
            projects.map((project, id) => {
                return (
                    <ProjectCard key={id} project={project} />
                )
            })
        }
      </div>
    </section>
  )
}

export default Projects
