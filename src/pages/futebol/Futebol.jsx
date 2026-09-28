import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Futebol.module.css";

import {
  FaFutbol,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaWhatsapp,
  FaChild,
} from "react-icons/fa";

// =========================
// IMAGENS MASCULINAS
// =========================

import FutebolMasculino1 from "../../assets/futebol_masculino1.webp";
import FutebolMasculino2 from "../../assets/futebol_masculino2.webp";
import FutebolMasculino3 from "../../assets/futebol_masculino3.webp";
import FutebolMasculino4 from "../../assets/futebol_masculino4.webp";

// =========================
// IMAGENS FEMININAS
// =========================

import FutebolFeminino1 from "../../assets/futebol/futebol_feminino1.webp";
import FutebolFeminino2 from "../../assets/futebol/futebol_feminino2.webp";
import FutebolFeminino3 from "../../assets/futebol/futebol_feminino3.webp";
import FutebolFeminino4 from "../../assets/futebol/futebol_feminino4.webp";

const masculino = [
  {
    id: 1,
    imagem: FutebolMasculino3,
    alt: "Meninos participando da escolinha de futebol",
  },
  {
    id: 2,
    imagem: FutebolMasculino2,
    alt: "Jovens treinando futebol",
  },
  {
    id: 3,
    imagem: FutebolMasculino4,
    alt: "Equipe masculina da escolinha de futebol",
  },
  {
    id: 4,
    imagem: FutebolMasculino1,
    alt: "Alunos durante atividade esportiva",
  },
];

const feminino = [
  {
    id: 1,
    imagem: FutebolFeminino1,
    alt: "Meninas participando da escolinha de futebol",
  },
  {
    id: 2,
    imagem: FutebolFeminino3,
    alt: "Jovens treinando futebol",
  },
  {
    id: 3,
    imagem: FutebolFeminino2,
    alt: "Equipe feminina da escolinha de futebol",
  },
  {
    id: 4,
    imagem: FutebolFeminino4,
    alt: "Alunas durante atividade esportiva",
  },
];

function Futebol() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.futebol}>

      {/* =========================
          HERO
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.heroContent}>

            <span className={styles.heroTag}>
              <FaFutbol />
              Escolinha de Futebol
            </span>

            <h1>
              Mais que futebol,
              formando sonhos.
            </h1>

            <p>
              A Escolinha de Futebol do projeto social
              <strong> Nova Cidade Juntos Somos Mais Fortes </strong>
              utiliza o esporte como ferramenta de inclusão,
              disciplina, convivência e desenvolvimento.
            </p>

            <p>
              Nosso objetivo é proporcionar às crianças e aos jovens
              um espaço seguro para aprender, praticar esporte,
              construir amizades e descobrir novas possibilidades
              para o futuro.
            </p>

            <div className={styles.heroButtons}>

              {/* <a
               href="https://wa.me/5521984772396?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."  
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <FaWhatsapp />
                Quero saber mais
              </a> */}

              <Link
                to="/doacoes"
                className={styles.secondaryButton}
              >
                <FaHeart />
                Quero Doar
              </Link>

            </div>

          </div>

          <div className={styles.heroIcon}>
            <FaFutbol />
          </div>

        </div>
      </section>


      {/* =========================
          SOBRE A ESCOLINHA
      ========================= */}

      <section className={styles.about}>

        <div className={styles.container}>

          <div className={styles.sectionIntro}>

            <span>Esporte e transformação</span>

            <h2>
              O futebol pode abrir caminhos.
            </h2>

            <p>
              Acreditamos que o esporte vai muito além das quatro
              linhas. Ele ensina responsabilidade, respeito,
              trabalho em equipe, disciplina e perseverança.
            </p>

          </div>

          <div className={styles.valuesGrid}>

            <article className={styles.valueCard}>

              <div className={styles.valueIcon}>
                <FaFutbol />
              </div>

              <h3>Esporte</h3>

              <p>
                Incentivamos a prática esportiva e hábitos
                saudáveis através do futebol.
              </p>

            </article>


            <article className={styles.valueCard}>

              <div className={styles.valueIcon}>
                <FaUsers />
              </div>

              <h3>Convivência</h3>

              <p>
                Criamos um ambiente de respeito, amizade,
                cooperação e integração.
              </p>

            </article>


            <article className={styles.valueCard}>

              <div className={styles.valueIcon}>
                <FaChild />
              </div>

              <h3>Desenvolvimento</h3>

              <p>
                Buscamos contribuir para o desenvolvimento
                pessoal e social de crianças e jovens.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          MASCULINO
      ========================= */}

      <section className={styles.category}>

        <div className={styles.container}>

          <div className={styles.categoryHeader}>

            <div>

              <span className={styles.sectionTag}>
                Futebol masculino
              </span>

              <h2>
                Meninos em campo,
                <span>sonhos em movimento.</span>
              </h2>

            </div>

            <p>
              Através do futebol, buscamos incentivar a disciplina,
              o respeito e o espírito de equipe, oferecendo aos
              participantes uma oportunidade de aprender e crescer
              dentro e fora do campo.
            </p>

          </div>


          <div className={styles.photoGrid}>

            {masculino.map((foto) => (

              <article
                key={foto.id}
                className={styles.photoCard}
              >

                <img
                  src={foto.imagem}
                  alt={foto.alt}
                />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          FEMININO
      ========================= */}

      <section className={styles.categoryFemale}>

        <div className={styles.container}>

          <div className={styles.categoryHeader}>

            <div>

              <span className={styles.sectionTag}>
                Futebol feminino
              </span>

              <h2>
                Elas também têm
                <span>lugar em campo.</span>
              </h2>

            </div>

            <p>
              Incentivamos a participação feminina no esporte,
              valorizando o talento, a confiança, a determinação
              e a força de cada menina e jovem que entra em campo.
            </p>

          </div>


          <div className={styles.photoGrid}>

            {feminino.map((foto) => (

              <article
                key={foto.id}
                className={styles.photoCard}
              >

                <img
                  src={foto.imagem}
                  alt={foto.alt}
                />

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          FAIXA ETÁRIA
      ========================= */}

      <section className={styles.age}>

        <div className={styles.container}>

          <div className={styles.sectionIntro}>

            <span>Faça parte</span>

            <h2>
              Um espaço para aprender,
              praticar e crescer.
            </h2>

            <p>
              A escolinha atende crianças e jovens,
              proporcionando atividades esportivas e
              momentos de integração através do futebol.
            </p>

            <section className={styles.ageSection}>
  <div className={styles.container}>

    <div className={styles.ageContent}>

<br/>
      <span className={styles.sectionTag}>
        Nossa escolinha
      </span>

      <h2>
        Futebol para quem quer aprender,
        <span>crescer e fazer parte do time.</span>
      </h2>

      <div className={styles.ageInfo}>

        <div className={styles.ageText}>
          <strong>6 a 25 anos</strong>

          <p>
            A escolinha é aberta para crianças, adolescentes e
            jovens de <strong>6 a 25 anos</strong>, criando um
            espaço de aprendizado, esporte e convivência.
          </p>
        </div>

        <div className={styles.ageBall}>
          ⚽
        </div>

        <div className={styles.ageText}>
          <strong>Muito além do futebol</strong>

          <p>
            Cada treino é uma oportunidade para desenvolver
            disciplina, respeito, confiança, espírito de equipe
            e novas habilidades.
          </p>
        </div>

      </div>

      <p className={styles.ageFinalText}>
        Queremos que cada participante encontre no esporte um
        espaço para evoluir, descobrir seu potencial e construir
        novas oportunidades.
      </p>

    </div>

  </div>
</section>

          </div>
        </div>
      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className={styles.cta}>

        <div className={styles.ctaContent}>

          <FaFutbol />

          <h2>
            O próximo sonho pode começar
            dentro de um campo.
          </h2>

          <p>
            Apoie a Escolinha de Futebol do Nova Cidade
            Juntos Somos Mais Fortes e ajude a criar
            oportunidades através do esporte.
          </p>

          <div className={styles.ctaButtons}>

            <a
              href="https://wa.me/5521984772693?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Escolinha%20de%20Futebol."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <FaWhatsapp />
              Fale conosco
            </a>

            <Link
              to="/doacoes"
              className={styles.lightButton}
            >
              Quero Doar
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Futebol;