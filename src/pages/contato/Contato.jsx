
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaMapMarkedAlt,
  FaHeart
} from "react-icons/fa";

import styles from "./Contato.module.css";

const telefone = "5521988074852";
const whatsapp = "5521984772396";
const email = "ongnovacidadejuntossomosfortes@gmail.com";

const endereco =
  "Rua Machado de Assis, Número 30, Inhoaíba, Nova Cidade, Rio de Janeiro - RJ, CEP 23063-560";

const enderecoMapa = encodeURIComponent(endereco);

const contatos = [
  {
    id: 1,
    icone: <FaPhoneAlt />,
    titulo: "Telefone",
    descricao: "Entre em contato conosco por ligação.",
    informacao: "(21) 98807-4852",
    link: `tel:+${telefone}`,
    textoLink: "Ligar agora",
  },
  {
    id: 2,
    icone: <FaWhatsapp />,
    titulo: "WhatsApp",
    descricao: "Fale conosco diretamente pelo WhatsApp.",
    informacao: "(21) 98477-2396",
    link: `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      "Olá, vim do site do projeto social Nova Cidade Juntos Somos Mais Fortes e gostaria de entrar em contato."
    )}`,
    textoLink: "Enviar mensagem",
    externo: true,
  },
  {
    id: 3,
    icone: <FaEnvelope />,
    titulo: "E-mail",
    descricao: "Envie sua mensagem ou tire suas dúvidas por e-mail.",
    informacao: email,
    link: `mailto:${email}`,
    textoLink: "Enviar e-mail",
  },
];

function Contatos() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.contatos}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.heroTag}>
            <FaEnvelope />
            Estamos aqui para conversar
          </span>

          <h1>
            Contatos e <span>localização</span>
          </h1>

          <p>
            Quer conhecer nosso trabalho, tirar dúvidas ou conversar
            conosco? Entre em contato pelos nossos canais ou venha
            conhecer o projeto Nova Cidade Juntos Somos Mais Fortes.
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
              "Olá, vim do site do projeto social Nova Cidade Juntos Somos Mais Fortes e gostaria de entrar em contato."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            <FaWhatsapp />
            Fale conosco
            <FaArrowRight />
          </a>
        </div>
      </section>

      {/* CONTATOS */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionTag}>
              Nossos canais de atendimento
            </span>

            <h2>Entre em contato conosco</h2>

            <p>
              Escolha a melhor forma de falar com nossa equipe.
              Será um prazer conversar com você!
            </p>
          </div>

          <div className={styles.contactCards}>
            {contatos.map((contato) => (
              <article
                key={contato.id}
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  {contato.icone}
                </div>

                <h3>{contato.titulo}</h3>

                <p>{contato.descricao}</p>

                <strong className={styles.contactInfo}>
                  {contato.informacao}
                </strong>

                <a
                  href={contato.link}
                  className={styles.contactButton}
                  target={contato.externo ? "_blank" : undefined}
                  rel={
                    contato.externo
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {contato.textoLink}
                  <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className={styles.location}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionTag}>
              <FaMapMarkerAlt />
              Onde estamos
            </span>

            <h2>Venha nos conhecer</h2>

            <p>
              Estamos localizados no bairro Nova Cidade, em Inhoaíba,
              no Rio de Janeiro. Consulte o endereço e veja como chegar.
            </p>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.addressCard}>
              <div className={styles.addressIcon}>
                <FaMapMarkerAlt />
              </div>

              <h3>Nosso endereço</h3>

              <p>
                Rua Machado de Assis, nº 30
                <br />
                Inhoaíba — Nova Cidade
                <br />
                Rio de Janeiro — RJ
                <br />
                CEP 23063-560
              </p>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${enderecoMapa}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapButton}
              >
                <FaMapMarkedAlt />
                Como chegar
                <FaArrowRight />
              </a>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                title="Mapa da localização do projeto social Nova Cidade Juntos Somos Mais Fortes"
                src={`https://maps.google.com/maps?q=${enderecoMapa}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <FaHeart className={styles.ctaIcon} />

          <h2>Vamos construir algo juntos?</h2>

          <p>
            Seja para conhecer nossas ações, propor uma parceria ou
            esclarecer uma dúvida, estamos à disposição para conversar.
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
              "Olá, vim do site do projeto social Nova Cidade Juntos Somos Mais Fortes e gostaria de conversar com vocês."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp />
            Converse pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contatos;