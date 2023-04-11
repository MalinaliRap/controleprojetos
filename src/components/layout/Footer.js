import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook></FaFacebook>
                </li>
                <li>
                    <FaInstagram></FaInstagram>
                </li>
                <li>
                    <FaLinkedin></FaLinkedin>
                </li>
             </ul>
             <p className={styles.copy_right}>
                <span>Controle de Projetos</span> &copy; 2023
            </p>
        </footer>
    );
}

export default Footer;