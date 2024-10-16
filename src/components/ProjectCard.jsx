import { getImageUrl } from "../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
        <div className={styles.descriptionOverlay}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.links}>
            <a href={demo}  target="_blank" className={styles.link}>Demo</a>
            <a href={source}  target="_blank" className={styles.link}>Código</a>
          </div>
        </div>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
