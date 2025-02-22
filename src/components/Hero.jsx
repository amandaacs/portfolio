import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";


const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Amanda Costa</h1>
            <p className={styles.description}>Acadêmica de Análise e Desenvolvimento de Sistemas | Desenvolvimento Web</p>
            <a href="https://drive.google.com/file/d/1_DSKe8JrjqDe9Wi2a1mCZwqtt7Z6mOBD/view?usp=sharing"  target="_blank" className={styles.contactBtn}>Download CV</a>
        </div>
        <img src={getImageUrl("hero/heroImage1.png")} alt="hero image" className={styles.heroImg} />
        {/*<div className={styles.topBlur} />
        <div className={styles.bottomBlur} />*/}
    </section>
  )
}

export default Hero
