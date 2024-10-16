import styles from './Navbar.module.css';
import { useState } from 'react';
import { getImageUrl } from '../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);



  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img 
                src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")
                    } 
                alt="menu-button" 
                className={styles.menuBtn} 
                onClick={() => {setMenuOpen(!menuOpen)}}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#experience">Experiência</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
