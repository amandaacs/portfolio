import { getImageUrl } from '../utils';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Entre em contato comigo!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:mail@mail.com">amandacostacs</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/amandaacs">github.com/amandaacs</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/amanda-costa-432175217/">Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
