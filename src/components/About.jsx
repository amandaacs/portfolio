import { getImageUrl } from "../utils"
import styles from "./About.module.css";


const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2  className={styles.title}>Sobre</h2>
        <div className={styles.content}>
            
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/frontIcon.png')} alt="cursor" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Como Frontend Developer, crio interfaces intuitivas e responsivas que proporcionam uma experiência de usuário envolvente.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/backIcon.png')} alt="server" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Como Backend Developer, meu foco é garantir desempenho, segurança e escalabilidade, 
                            utilizando as melhores práticas de desenvolvimento.</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default About
