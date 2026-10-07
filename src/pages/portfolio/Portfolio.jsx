import styles from "./Portfolio.module.css";

import { FaFilePdf, FaDownload } from "react-icons/fa";

import portfolioPdf from "../../assets/portfolio/portifolio.pdf";

import Pg1 from '../../assets/portfolio/1.webp'
import Pg2 from '../../assets/portfolio/2.webp'
import Pg3 from '../../assets/portfolio/3.webp'
import Pg4 from '../../assets/portfolio/4.webp'
import Pg5 from '../../assets/portfolio/5.webp'
import Pg6 from '../../assets/portfolio/6.webp'
import Pg7 from '../../assets/portfolio/7.webp'
import Pg8 from '../../assets/portfolio/8.webp'
import Pg9 from '../../assets/portfolio/9.webp'
import Pg10 from '../../assets/portfolio/10.webp'
import Pg11 from '../../assets/portfolio/11.webp'
import Pg12 from '../../assets/portfolio/12.webp'
import Pg13 from '../../assets/portfolio/13.webp'
import Pg14 from '../../assets/portfolio/14.webp'
import Pg15 from '../../assets/portfolio/15.webp'
import Pg16 from '../../assets/portfolio/16.webp'

const paginas = [
  {
    id: 1,
    imagem: Pg1
  },
  {
    id: 2,
    imagem: Pg2
  },
  {
    id: 3,
    imagem: Pg3
  },
  {
    id: 4,
    imagem: Pg4
  },
  {
    id: 5,
    imagem: Pg5
  },
  {
    id: 6,
    imagem: Pg6
  },
  {
    id: 7,
    imagem: Pg7
  },
  {
    id: 8,
    imagem: Pg8
  },
  {
    id: 9,
    imagem: Pg9
  },
  {
    id: 10,
    imagem: Pg10
  },
  {
    id: 11,
    imagem: Pg11
  },
  {
    id: 12,
    imagem: Pg12
  },
  {
    id: 13,
    imagem: Pg13
  },
  {
    id: 14,
    imagem: Pg14
  },
  {
    id: 15,
    imagem: Pg15
  },
  {
    id: 16,
    imagem: Pg16
  }, 
]

function Portfolio() {
  return (
    <main className={styles.portfolio}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <FaFilePdf className={styles.heroIcon} />

          <h1>
            Confira o nosso
            <span> Portifólio</span>
          </h1>

          <p>
            Confira nosso portfólio completo e conheça os projetos,
            ações e iniciativas desenvolvidos pela ONG Nova Cidade –
            Juntos Somos Mais Fortes.
          </p>

          <a
            href={portfolioPdf}
            download="Portfolio-Nova-Cidade-Juntos-Somos-Mais-Fortes.pdf"
            className={styles.downloadButton}
          >
            <FaDownload />
            Baixar portfólio
          </a>
        </div>
      </section>

      {/* PDF */}
      <section className={styles.pdfSection}>
        <div className={styles.container}>
          
          <div className={styles.portfolio_pages}>
            {paginas.map((pagina)=>(
              <img key={pagina.id} src={pagina.imagem} alt="Portfólio" />
            ))}
          </div>
          <a
              href={portfolioPdf}
              download="Portfolio-Nova-Cidade-Juntos-Somos-Mais-Fortes.pdf"
              className={styles.pdfButton}
            >
              <FaDownload />
              Baixar Portifólio
            </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;