import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./DistribuicaoDeCestasBasicas.module.css";

import {
  FaBoxOpen,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// FOTOS
import foto1 from "../../assets/cestas/cestas1.webp";
import foto2 from "../../assets/cestas/cestas2.webp";
import foto3 from "../../assets/cestas/cestas3.webp";
import foto4 from "../../assets/cestas/cestas4.webp";
import foto5 from "../../assets/cestas/cestas5.webp";
import foto6 from "../../assets/cestas/cestas6.webp";
import foto7 from "../../assets/cestas/cestas7.webp";
import foto8 from "../../assets/cestas/cestas8.webp";

// FOTO PRINCIPAL DO HERO
const fotoPrincipal = foto1;

// FOTOS DA GALERIA PRINCIPAL
const fotosPrincipais = [
  {
    id: 1,
    imagem: foto5,
    alt: "Cestas básicas organizadas para distribuição",
  },
  {
    id: 2,
    imagem: foto3,
    alt: "Voluntários participando da ação solidária",
  },
  {
    id: 3,
    imagem: foto4,
    alt: "Ação de entrega de cestas básicas às famílias",
  },
];

// FOTOS DO CARROSSEL
const fotosCarrossel = [
  {
    id: 1,
    imagem: foto1,
    alt: "Momento da ação de distribuição de cestas básicas",
  },
  {
    id: 2,
    imagem: foto2,
    alt: "Voluntários reunidos durante a ação social",
  },
  {
    id: 3,
    imagem: foto3,
    alt: "Cestas básicas preparadas para as famílias",
  },
  {
    id: 4,
    imagem: foto4,
    alt: "Registro da ação solidária na comunidade",
  },
   {
    id: 5,
    imagem: foto5,
    alt: "Momento da ação de distribuição de cestas básicas",
  },
  {
    id: 6,
    imagem: foto6,
    alt: "Voluntários reunidos durante a ação social",
  },
  {
    id: 7,
    imagem: foto7,
    alt: "Cestas básicas preparadas para as famílias",
  },
  {
    id: 8,
    imagem: foto8,
    alt: "Registro da ação solidária na comunidade",
  }
];

function DistribuicaoDeCestasBasicas() {
  const location = useLocation();

  const [fotoAtual, setFotoAtual] = useState(0);

  // ROLA A PÁGINA PARA O TOPO AO MUDAR DE ROTA
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    <main className={styles.cestasBasicas}>

      {/* HERO */}
      <section className={styles.hero} data-aos="fade-right" data-aos-delay="0" data-aos-once="false">
        <div className={styles.container}>

          <div className={styles.heroContent}>
            <span className={styles.heroTag}>
              <FaBoxOpen />
              Distribuição de Cestas Básicas
            </span>

            <h1>
              Um gesto de solidariedade pode levar{" "}
              <span>esperança à mesa.</span>
            </h1>

            <p>
              Por meio da distribuição de cestas básicas, buscamos
              apoiar famílias que enfrentam dificuldades e contribuir
              para que tenham acesso a alimentos essenciais.
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src={fotoPrincipal}
              alt="Ação de distribuição de cestas básicas"
            />
          </div>

        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className={styles.intro} data-aos="fade-up" data-aos-delay="0" data-aos-once="false">
        <div className={styles.container}>

          <div className={styles.sectionTag}>
            <FaHeart />
            Nossa ação
          </div>

          <h2>
            Solidariedade que chega a quem precisa.
          </h2>

          <p>
            A distribuição de cestas básicas faz parte das ações
            do projeto Juntos Somos Mais Fortes, que busca apoiar
            pessoas e famílias em situação de vulnerabilidade.
          </p>

          <p>
            Cada contribuição e cada gesto de voluntariado ajudam
            a tornar essa iniciativa possível, fortalecendo a
            união e o cuidado com a nossa comunidade.
          </p>

        </div>
      </section>

      {/* FOTOS PRINCIPAIS */}
      <section className={styles.mainPhotos} data-aos="fade-right" data-aos-delay="0" data-aos-once="false">
        <div className={styles.container}>

          <div className={styles.sectionIntro}>
            <span>Momentos da ação</span>

            <h2>
              Pequenos gestos podem fazer a diferença.
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
                  loading="lazy"
                />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* COMO ACONTECE */}
      <section className={styles.howItWorks} data-aos="fade-up" data-aos-delay="0" data-aos-once="false">
        <div className={styles.container}>

          <div className={styles.howContent}>
            <span className={styles.sectionTag}>
              Como acontece
            </span>

            <h2>
              Juntos, podemos fazer mais.
            </h2>

            <p>
              Para que os alimentos cheguem às famílias, é
              importante contar com pessoas dispostas a colaborar,
              doações e organização.
            </p>

            <p>
              Cada etapa representa uma oportunidade de transformar
              a solidariedade em apoio concreto para quem precisa.
            </p>
          </div>

          <div className={styles.steps}>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <FaBoxOpen />
              </div>

              <div>
                <h3>Arrecadação</h3>

                <p>
                  As doações ajudam a reunir os alimentos
                  necessários para compor as cestas básicas.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <FaUsers />
              </div>

              <div>
                <h3>Organização</h3>

                <p>
                  Voluntários colaboram para organizar os alimentos
                  e preparar as cestas para entrega.
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
                  As cestas são destinadas às famílias que
                  precisam de apoio.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CARROSSEL */}
      <section className={styles.gallery} data-aos="fade-right" data-aos-delay="0" data-aos-once="false">
        <div className={styles.container}>

          <div className={styles.sectionIntro}>
            <span>Galeria</span>

            <h2>
              Veja alguns momentos da nossa iniciativa.
            </h2>

            <p>
              Registros que mostram a importância da colaboração
              e da solidariedade em nossa comunidade.
            </p>
          </div>

          <div className={styles.slider}>

            <button
              type="button"
              className={styles.sliderButton}
              onClick={fotoAnterior}
              aria-label="Foto anterior"
            >
              <FaChevronLeft
                className={styles.sliderButtonArrow}
              />
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
              <FaChevronRight
                className={styles.sliderButtonArrow}
              />
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
                aria-current={
                  index === fotoAtual ? "true" : undefined
                }
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} data-aos="fade-up" data-aos-delay="0" data-aos-once="false">
        <div className={styles.ctaContent}>

          <FaHeart />

          <h2>
            Quer ajudar a transformar vidas?
          </h2>

          <p>
            Você pode fazer parte dessa iniciativa por meio
            do voluntariado, de doações ou de parcerias.
            Toda colaboração é importante.
          </p>

          <div className={styles.ctaButtons}>

            <a
              href="https://wa.me/5521984772396?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Quero ser voluntário
              <FaArrowRight />
            </a>

            <a
              href="/doacoes"
              className={styles.secondaryButton}
            >
              Quero doar
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default DistribuicaoDeCestasBasicas;

