import { useEffect, useState } from "react";
import styles from "./DistribuicaoDeQuentinhas.module.css";

import {
  FaUtensils,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// FOTOS PRINCIPAIS
import principal1 from "../../assets/quentinhas/quentinhas1.webp";

import principal2 from "../../assets/quentinhas/quentinhas2.webp"
import principal3 from "../../assets/quentinhas/quentinhas3.webp"
import principal4 from "../../assets/quentinhas/quentinhas4.webp"

import principal5 from "../../assets/quentinhas/quentinhas5.webp";
import principal6 from "../../assets/quentinhas/quentinhas6.webp";

// FOTOS DO CARROSSEL
import slide1 from "../../assets/quentinhas/slide1.jpeg";
import slide2 from "../../assets/quentinhas/slide2.jpeg";
import slide3 from "../../assets/quentinhas/slide3.jpeg";
import slide4 from "../../assets/quentinhas/slide4.jpeg";
import slide5 from "../../assets/quentinhas/slide5.jpeg";
import slide6 from "../../assets/quentinhas/slide6.jpeg";
import slide7 from "../../assets/quentinhas/slide7.jpeg";
import slide8 from "../../assets/quentinhas/slide8.jpeg";
import slide9 from "../../assets/quentinhas/slide9.jpeg";
import slide10 from "../../assets/quentinhas/slide10.jpeg";
import slide11 from "../../assets/quentinhas/slide11.jpeg";
import slide12 from "../../assets/quentinhas/slide12.jpeg";
import slide13 from "../../assets/quentinhas/slide13.jpeg";
import slide14 from "../../assets/quentinhas/slide14.jpeg";
import slide15 from "../../assets/quentinhas/slide15.jpeg";
import slide16 from "../../assets/quentinhas/slide16.jpeg";

const fotosPrincipais = [
  {
    id: 1,
    imagem: principal5,
    alt: "Voluntários preparando quentinhas",
  },
  {
    id: 2,
    imagem: principal4,
    alt: "Voluntários preparando quentinhas",
  },
  {
    id: 3,
    imagem: principal6,
    alt: "Quentinhas preparadas para distribuição",
  },
  {
    id: 4,
    imagem: principal2,
    alt: "Voluntários durante a distribuição de quentinhas",
  },
   {
    id: 5,
    imagem: principal3,
    alt: "Voluntários durante a distribuição de quentinhas",
  },
];

const fotosCarrossel = [
  {
    id: 1,
    imagem: slide1,
    alt: "Ação de distribuição de quentinhas",
  },
  {
    id: 2,
    imagem: slide2,
    alt: "Voluntários participando da ação",
  },
  {
    id: 3,
    imagem: slide3,
    alt: "Quentinhas preparadas para a comunidade",
  },
  {
    id: 4,
    imagem: slide4,
    alt: "Entrega de refeições",
  },
  {
    id: 5,
    imagem: slide5,
    alt: "Voluntários realizando uma ação social",
  },
  {
    id: 6,
    imagem: slide6,
    alt: "Ação de distribuição de quentinhas",
  },
  {
    id: 7,
    imagem: slide7,
    alt: "Voluntários participando da ação",
  },
  {
    id: 8,
    imagem: slide8,
    alt: "Quentinhas preparadas para a comunidade",
  },
  {
    id: 9,
    imagem: slide9,
    alt: "Entrega de refeições",
  },
  {
    id: 10,
    imagem: slide10,
    alt: "Voluntários realizando uma ação social",
  },
  {
    id: 11,
    imagem: slide11,
    alt: "Ação de distribuição de quentinhas",
  },
  {
    id: 12,
    imagem: slide12,
    alt: "Voluntários participando da ação",
  },
  {
    id: 13,
    imagem: slide13,
    alt: "Quentinhas preparadas para a comunidade",
  },
  {
    id: 14,
    imagem: slide14,
    alt: "Entrega de refeições",
  },
  {
    id: 15,
    imagem: slide15,
    alt: "Voluntários realizando uma ação social",
  },
  {
    id: 16,
    imagem: slide16,
    alt: "Voluntários realizando uma ação social",
  },
];

function DistribuicaoDeQuentinhas() {
  const [fotoAtual, setFotoAtual] = useState(0);

  // PASSAGEM AUTOMÁTICA DAS FOTOS
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoAtual((atual) =>
        atual === fotosCarrossel.length - 1 ? 0 : atual + 1
      );
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  // PRÓXIMA FOTO
  function proximaFoto() {
    setFotoAtual((atual) =>
      atual === fotosCarrossel.length - 1 ? 0 : atual + 1
    );
  }

  // FOTO ANTERIOR
  function fotoAnterior() {
    setFotoAtual((atual) =>
      atual === 0 ? fotosCarrossel.length - 1 : atual - 1
    );
  }

  return (
    <main className={styles.quentinhas}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.heroContent}>

            <span className={styles.heroTag}>
              <FaUtensils />
              Distribuição de Quentinhas
            </span>

            <h1>
              Um prato de comida também pode ser um gesto de{" "}
              <span>acolhimento.</span>
            </h1>

            <p>
              Por meio da distribuição de quentinhas, levamos refeições
              preparadas com carinho para pessoas e famílias que precisam
              de apoio.
            </p>

          </div>

          <div className={styles.heroImage}>
            <img
              src={principal1}
              alt="Voluntários preparando quentinhas"
            />
          </div>

        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className={styles.intro}>
        <div className={styles.container}>

          <div className={styles.sectionTag}>
            <FaHeart/>
            Nossa ação
          </div>

          <h2>
            Mais do que uma refeição, um momento de cuidado.
          </h2>

          <p>
            A distribuição de quentinhas faz parte das ações do projeto
            Juntos Somos Mais Fortes e nasceu da vontade de ajudar pessoas
            que enfrentam dificuldades.
          </p>

          <p>
            Cada refeição é preparada e organizada com a colaboração de
            voluntários que dedicam seu tempo para que esse alimento chegue
            até quem precisa.
          </p>

        </div>
      </section>

      {/* 3 FOTOS PRINCIPAIS */}
      <section className={styles.mainPhotos}>
        <div className={styles.container}>

          <div className={styles.sectionIntro}>
            <span>Momentos da ação</span>

            <h2>
              Solidariedade que acontece na prática.
            </h2>
          </div>

          <div className={styles.photosList}>

            {fotosPrincipais.map((foto) => (
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

      {/* COMO ACONTECE */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>

          <div className={styles.howContent}>

            <span className={styles.sectionTag}>
              Como acontece
            </span>

            <h2>
              Cada etapa conta.
            </h2>

            <p>
              A realização de uma ação começa muito antes da entrega.
              É preciso organizar os alimentos, preparar as refeições,
              montar as quentinhas e reunir os voluntários.
            </p>

            <p>
              Quando tudo está pronto, as refeições são distribuídas
              para pessoas que precisam de apoio.
            </p>

          </div>

          <div className={styles.steps}>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <FaUtensils />
              </div>

              <div>
                <h3>Preparação</h3>

                <p>
                  As refeições são preparadas e organizadas.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <FaUsers />
              </div>

              <div>
                <h3>Voluntariado</h3>

                <p>
                  Pessoas se unem para tornar a ação possível.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <FaHeart />
              </div>

              <div>
                <h3>Distribuição</h3>

                <p>
                  As quentinhas chegam até quem precisa.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CARROSSEL */}
      <section className={styles.gallery}>
        <div className={styles.container}>

          <div className={styles.sectionIntro}>
            <span>Galeria</span>

            <h2>
              Confira alguns momentos da nossa ação.
            </h2>

            <p>
              Cada foto representa um pouco do trabalho realizado por
              voluntários e colaboradores.
            </p>
          </div>

          <div className={styles.slider}>

            <button
              type="button"
              className={styles.sliderButton}
              onClick={fotoAnterior}
              aria-label="Foto anterior"
            >
              <FaChevronLeft className={styles.sliderButtonArrow} />
            </button>

            <div className={styles.sliderImage}>
              <img
                src={fotosCarrossel[fotoAtual].imagem}
                alt={fotosCarrossel[fotoAtual].alt}
              />
            </div>

            <button
              type="button"
              className={styles.sliderButton}
              onClick={proximaFoto}
              aria-label="Próxima foto"
            >
              <FaChevronRight className={styles.sliderButtonArrow}/>
            </button>

          </div>

          {/* INDICADORES */}
          <div className={styles.dots}>

            {fotosCarrossel.map((foto, index) => (
              <button
                key={foto.id}
                type="button"
                className={
                  index === fotoAtual
                    ? styles.dotActive
                    : styles.dot
                }
                onClick={() => setFotoAtual(index)}
                aria-label={`Ir para a foto ${index + 1}`}
              />
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>

          <FaHeart />

          <h2>
            Quer fazer parte dessa ação?
          </h2>

          <p>
            Você também pode contribuir com o projeto, seja através
            do voluntariado, de doações ou de parcerias.
          </p>

          <div className={styles.ctaButtons}>

            <a
              href="/seja-voluntario"
              className={styles.primaryButton}
            >
              Quero ser voluntário
              <FaArrowRight />
            </a>

            <a
              href="/doe"
              className={styles.secondaryButton}
            >
              Quero ajudar
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default DistribuicaoDeQuentinhas;