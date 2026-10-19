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
          <div className={styles.cnpj_container}>
            <h2>Nova Cidade Juntos Somos Mais Fortes</h2>
            <p>CNPJ: 53.268.572-0001/12</p>
          </div>
        
          <p>
            Siga nossas redes sociais e acompanhe de perto nossas ações.
          </p>

          <a
            href="https://www.instagram.com/novacidade2021/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <FaInstagram className={styles.insta} />
            Instagram
          </a>
          <br/>
          <a
            href="https://www.threads.com/@novacidade2021?xmt=AQG0DOSFQFPvS2gJbWzl9LyqRIKj0QoNrnJdjiM6GNzEYZw"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.facebook}
          >
            <FaFacebook className={styles.face} />
            Facebook
          </a>
        </div>
      </section>
    </footer>
  )
}
