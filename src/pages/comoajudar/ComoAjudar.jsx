
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaHandshake,
  FaHeart,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

import styles from "./ComoAjudar.module.css";

const numeroWhatsApp = "5521984772396";

const formasDeAjudar = [
  {
    id: 1,
    icone: <FaUsers />,
    titulo: "Seja voluntário",
    descricao:
      "Doe seu tempo, suas habilidades e seu carinho para ajudar pessoas e famílias que precisam de apoio.",
    textoBotao: "Quero ser voluntário",
    mensagem:
      "Olá, vim do site e gostaria de saber como posso ser voluntário no projeto social Nova Cidade Juntos Somos Mais Fortes.",
  },
  {
    id: 2,
    icone: <FaHandshake />,
    titulo: "Seja parceiro",
    descricao:
      "Sua empresa ou instituição pode se unir a nós para fortalecer nossas ações e ampliar o alcance do projeto.",
    textoBotao: "Quero ser parceiro",
    mensagem:
      "Olá, vim do site e gostaria de conversar sobre uma parceria com o projeto social Nova Cidade Juntos Somos Mais Fortes.",
  },
  {
    id: 3,
    icone: <FaHeart />,
    titulo: "Faça uma doação",
    descricao:
      "Toda contribuição é importante e pode ajudar na distribuição de alimentos e na continuidade das nossas ações sociais.",
    textoBotao: "Doe pelo WhatsApp",
    mensagem:
      "Olá, vim do site e gostaria de saber como posso fazer uma doação para o projeto social Nova Cidade Juntos Somos Mais Fortes.",
    segundoBotao: "Ir para página de doações",
    linkDoacoes: "/doacoes",
  },
];

function ComoAjudar() {
  const location = useLocation();

  // Volta ao topo sempre que o usuário acessa esta página.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.comoAjudar}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.heroTag}>
            <FaHeart />
            Faça parte dessa história
          </span>

          <h1>
            Como <span>ajudar?</span>
          </h1>

          <p>
            A solidariedade começa com pequenas atitudes. Seja com seu
            tempo, uma parceria ou uma doação, você pode contribuir para
            transformar vidas e fortalecer nossa comunidade.
          </p>

          <a
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              "Olá, vim do site e gostaria de saber como posso ajudar o projeto social Nova Cidade Juntos Somos Mais Fortes."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaWhatsapp />
            Quero ajudar
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* FORMAS DE AJUDAR */}
      <section className={styles.formas}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionTag}>
              Sua ajuda faz a diferença
            </span>

            <h2>Escolha como você quer contribuir</h2>

            <p>
              Existem diferentes maneiras de fazer parte dessa iniciativa.
              Escolha a que mais combina com você e fale conosco pelo WhatsApp.
            </p>
          </div>

          <div className={styles.cards}>
            {formasDeAjudar.map((forma) => (
              <article
                key={forma.id}
                className={styles.card}
              >
                <div className={styles.cardIcon}>
                  {forma.icone}
                </div>

                <h3>{forma.titulo}</h3>

                <p>{forma.descricao}</p>

                <div className={styles.cardButtons}>
                  {/* BOTÃO DO WHATSAPP */}
                  <a
                    href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                      forma.mensagem
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardButton}
                  >
                    {forma.textoBotao}
                    <FaWhatsapp />
                  </a>

                  {/* SEGUNDO BOTÃO: SOMENTE PARA DOAÇÕES */}
                  {forma.linkDoacoes && (
                    <Link
                      to={forma.linkDoacoes}
                      className={styles.doeButton}
                    >
                      {forma.segundoBotao}
                      <FaArrowRight />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <FaHeart className={styles.ctaIcon} />

          <h2>Juntos somos mais fortes.</h2>

          <p>
            Cada gesto de solidariedade ajuda a construir uma comunidade
            mais acolhedora, humana e cheia de esperança.
          </p>

          <a
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
              "Olá, vim do site e gostaria de conversar sobre como ajudar o projeto social Nova Cidade Juntos Somos Mais Fortes."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp />
            Fale conosco
          </a>
        </div>
      </section>
    </main>
  );
}

export default ComoAjudar;