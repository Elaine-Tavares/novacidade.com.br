import { Link } from "react-router-dom";
import ImagemPrincipal from '../../assets/hero.webp';
import Banda from '../../assets/banda_de_musica_nova_cidade.webp'
import styles from "./Home.module.css";

import {
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
  FaUtensils,
  FaShoppingBasket,
  FaGraduationCap,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const projetos = [
  {
    id: 1,
    icone: <FaUtensils />,
    titulo: "Distribuição de Quentinhas",
    descricao:
      "Levamos refeições para pessoas e famílias que precisam de apoio.",
  },
  {
    id: 2,
    icone: <FaShoppingBasket />,
    titulo: "Cestas Básicas",
    descricao:
      "Montamos e distribuímos cestas básicas para famílias da comunidade.",
  },
  {
    id: 3,
    icone: <FaGraduationCap />,
    titulo: "Cursos e Oficinas",
    descricao:
      "Buscamos oferecer oportunidades de aprendizado, desenvolvimento e inclusão.",
  },
];

const formasDeAjudar = [
  {
    icone: <FaHeart />,
    titulo: "Faça uma doação",
    descricao:
      "Sua contribuição ajuda a manter nossas ações e alcançar mais pessoas.",
    link: "/doe",
    textoLink: "Quero doar",
  },
  {
    icone: <FaUsers />,
    titulo: "Seja voluntário",
    descricao:
      "Doe seu tempo, conhecimento e habilidades para fazer parte dessa transformação.",
    link: "/seja-voluntario",
    textoLink: "Quero ajudar",
  },
  {
    icone: <FaHandHoldingHeart />,
    titulo: "Seja um parceiro",
    descricao:
      "Empresas e instituições também podem contribuir para ampliar nosso impacto.",
    link: "/contato",
    textoLink: "Quero ser parceiro",
  },
];

function Home() {
  return (
    <main className={styles.home}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>
              <FaHeart />
              Juntos podemos transformar vidas
            </span>

            <h1>
              Solidariedade que se transforma em{" "}
              <span>esperança.</span>
            </h1>

            <p>
              Trabalhamos para levar apoio, alimento, oportunidades e
              acolhimento para pessoas e famílias que precisam.
            </p>

            <div className={styles.heroButtons}>
              <Link to="/quemsomos" className={styles.primaryButton}>
                Conheça nosso trabalho
                <FaArrowRight />
              </Link>

              <Link to="/doe" className={styles.secondaryButton}>
                <FaHeart />
                Doe   
              </Link> 
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src={ImagemPrincipal}
              alt="Imagem Principal"
            />
            <div className={styles.contatos_img}>
              <strong>Contatos: </strong>
              <span>(21) 98807 4852</span> <br/><br/>
              <a 
                className={styles.whats}
                href="https://wa.me/5521984772693?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."  
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp className={styles.whats_img}/>(21) 98477 2396
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Nosso impacto</span>

            <h2>
              Pequenas atitudes podem gerar grandes transformações.
            </h2>
          </div>

          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <strong>+2.000</strong>
              <span>Quentinhas distribuídas desde 2021</span>
            </div>

            <div className={styles.impactCard}>
              <strong>+2.000</strong>
              <span>Famílias beneficiadas</span>
            </div>

            <div className={styles.impactCard}>
              <strong>8</strong>
              <span>Voluntários</span>
            </div>

            <div className={styles.impactCard}>
              <strong>1</strong>
              <span>Parceiro(s)</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutImage}>
            <img
              src={Banda}
              alt="Banda"
            />
          </div>

          <div className={styles.aboutContent}>
            <span className={styles.sectionTag}>Quem somos</span>

            <h2>
              Um projeto feito por pessoas que acreditam no poder da
              solidariedade.
            </h2>

            <p>
              Somos um projeto social que surgiu no ano de 2021, durante a pandemia, com o objetivo inicial de ajudar um casal de amigos durante a gestação. Conseguimos arrecadar diversos materiais para o nascimento da criança e também recebemos alimentos. Como o casal não precisou dos alimentos, resolvemos fazer uma doação para pessoas que estavam necessitando.

              Entramos em contato com a associação de moradores e realizamos um levantamento das pessoas que estavam precisando de uma cesta básica. Com as doações arrecadadas, conseguimos montar 5 cestas básicas e fazer a entrega para moradores do bairro.
            </p>

            <p>
              Uma semana depois, nos reunimos e resolvemos montar um projeto, no qual pediríamos doações aos moradores do bairro para montar cestas básicas e também preparar quentinhas para serem doadas às pessoas em situação de vulnerabilidade.

              Foi então que nasceu o nome do projeto: <strong>Nova Cidade Juntos Somos Mais Fortes</strong>.
            </p>

            {/* <Link to="/quem-somos" className={styles.textLink}>
              Conheça nossa história
              <FaArrowRight />
            </Link> */}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionTag}>Nossas ações</span>

              <h2>Conheça nossos projetos</h2>
            </div>

            <Link to="/projetos" className={styles.textLink}>
              Ver todos
              <FaArrowRight />
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {projetos.map((projeto) => (
              <article
                key={projeto.id}
                className={styles.projectCard}
              >
                <div className={styles.projectIcon}>
                  {projeto.icone}
                </div>

                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                <Link
                  to="/projetos"
                  className={styles.cardLink}
                >
                  Saiba mais
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className={styles.help}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Faça parte</span>

            <h2>Existem muitas formas de ajudar.</h2>

            <p>
              Cada pessoa pode contribuir de uma maneira. Escolha como você
              gostaria de fazer parte dessa história.
            </p>
          </div>

          <div className={styles.helpGrid}>
            {formasDeAjudar.map((forma) => (
              <article
                key={forma.titulo}
                className={styles.helpCard}
              >
                <div className={styles.helpIcon}>
                  {forma.icone}
                </div>

                <h3>{forma.titulo}</h3>

                <p>{forma.descricao}</p>

                <Link
                  to={forma.link}
                  className={styles.cardLink}
                >
                  {forma.textoLink}
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTARIADO CTA */}
      <section className={styles.volunteer}>
        <div className={styles.volunteerContainer}>
          <div>
            <span className={styles.sectionTag}>
              Seja parte da mudança
            </span>

            <h2>
              Seu tempo e suas habilidades podem transformar vidas.
            </h2>

            <p>
              Junte-se a nós e descubra como você pode contribuir com o
              projeto.
            </p>
          </div>

          <Link
            to="/sejavoluntario"
            className={styles.lightButton}
          >
            Quero ser voluntário
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className={styles.partners}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span>Nossos parceiros</span>

            <h2>Juntos conseguimos chegar mais longe.</h2>

            <p>
              Acreditamos que a transformação social acontece quando pessoas,
              empresas e instituições trabalham juntas.
            </p>
          </div>

          <div className={styles.partnerLogo}>
            <span>CEASA</span>
          </div>
        </div>
      </section>

      {/* CTA DOAÇÃO */}
      <section className={styles.donation}>
        <div className={styles.donationContent}>
          <FaHeart />

          <h2>Quer fazer parte dessa transformação?</h2>

          <p>
            Sua ajuda pode contribuir para que nossas ações alcancem ainda
            mais pessoas.
          </p>

          <div className={styles.donationButtons}>
            <Link to="/doe" className={styles.secondaryButton}>
             <FaHeart />
              Quero doar  
            </Link>
            <a
              className={styles.whatsappButton}
              href="https://wa.me/5521984772693?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."
              target="_blank"
              rel="noopener noreferrer" 
            >
              <FaWhatsapp />
              Fale conosco
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;