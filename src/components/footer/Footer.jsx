import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook
} from "react-icons/fa";

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
        {/* REDES SOCIAIS */}
      <section className={styles.social}>
        <div className={styles.container}>
          <h2>Acompanhe nosso trabalho</h2>

          <p>
            Siga nossas redes sociais e acompanhe de perto nossas ações.
          </p>

          <a
            href="https://www.instagram.com/novacidade2021/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <FaInstagram />
            Instagram
          </a>
          <br/>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebook}
          >
            <FaFacebook />
            Facebook
          </a>
        </div>
      </section>
    </footer>
  )
}
