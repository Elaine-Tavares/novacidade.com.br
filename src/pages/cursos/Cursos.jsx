import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Cursos.module.css";

import {
  FaGraduationCap,
  FaHeart,
  FaUsers,
  FaHandHoldingHeart,
  FaArrowRight,
  FaWhatsapp,
  FaTools,
} from "react-icons/fa";

const cursos = [
  {
    id: 1,
    titulo: "Terceira Idade",
    descricao:
      "Projeto voltado à integração, convivência, atividades e valorização das pessoas da terceira idade.",
  },
  {
    id: 2,
    titulo: "Futebol Adulto",
    descricao:
      "Utilização do esporte como ferramenta de integração, disciplina, convivência e qualidade de vida.",
  },
  {
    id: 3,
    titulo: "Futebol Juniores",
    descricao:
      "Incentivo à prática esportiva, ao desenvolvimento, à disciplina e ao trabalho em equipe entre jovens.",
  },
  {
    id: 4,
    titulo: "Trança",
    descricao:
      "Curso voltado ao aprendizado de técnicas de tranças, possibilitando o desenvolvimento de novas habilidades.",
  },
  {
    id: 5,
    titulo: "Taekwondo",
    descricao:
      "Prática esportiva que contribui para disciplina, concentração, respeito e desenvolvimento pessoal.",
  },
  {
    id: 6,
    titulo: "Artesãs",
    descricao:
      "Incentivo ao artesanato como forma de aprendizado, expressão, geração de renda e fortalecimento da comunidade.",
  },
  {
    id: 7,
    titulo: "Cílios",
    descricao:
      "Capacitação em técnicas de extensão e cuidados com cílios, criando possibilidades de aprendizado e trabalho.",
  },
  {
    id: 8,
    titulo: "Banda Musical",
    descricao:
      "Projeto que busca promover o aprendizado musical, a cultura, a convivência e a expressão artística.",
  },
  {
    id: 9,
    titulo: "Manicure e Pedicure",
    descricao:
      "Curso voltado ao desenvolvimento de habilidades profissionais na área de beleza e cuidados pessoais.",
  },
  {
    id: 10,
    titulo: "Luta Muay Thai",
    descricao:
      "Atividade esportiva que trabalha disciplina, condicionamento físico, concentração e superação.",
  },
  {
    id: 11,
    titulo: "A Fome Não Espera",
    descricao:
      "Ação voltada ao apoio alimentar e ao atendimento de pessoas e famílias em situação de vulnerabilidade.",
  },
  {
    id: 12,
    titulo: "Educar",
    descricao:
      "Projeto voltado à educação, ao aprendizado e à criação de novas oportunidades para a comunidade.",
  },
  {
    id: 13,
    titulo: "Corte de Cabelo Masculino",
    descricao:
      "Curso que busca ensinar técnicas de corte masculino e possibilitar o desenvolvimento de uma nova habilidade profissional.",
  },
  {
    id: 14,
    titulo: "Corte de Cabelo Feminino",
    descricao:
      "Capacitação em técnicas de corte feminino, promovendo aprendizado e novas possibilidades profissionais.",
  },
];

const formasDeApoiar = [
  {
    icone: <FaHeart />,
    titulo: "Faça uma doação",
    descricao:
      "Sua contribuição pode ajudar na compra de materiais, equipamentos e recursos necessários para colocar os projetos em prática.",
    link: "/doacoes",
    textoLink: "Quero doar",
  },
  {
    icone: <FaUsers />,
    titulo: "Seja um parceiro",
    descricao:
      "Empresas e profissionais podem contribuir oferecendo recursos, materiais, serviços ou conhecimento.",
    link: "/contato",
    textoLink: "Quero ser parceiro",
  },
  {
    icone: <FaHandHoldingHeart />,
    titulo: "Seja voluntário",
    descricao:
      "Compartilhe seu conhecimento, suas habilidades e seu tempo para ajudar a transformar esses projetos em realidade.",
    link: "/sejavoluntario",
    textoLink: "Quero ajudar",
  },
];

function Cursos() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.cursos}>

      {/* =========================
          HERO
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>

          <div className={styles.heroContent}>

            <span className={styles.heroTag}>
              <FaGraduationCap />
              Cursos e projetos
            </span>

            <h1>
              Conhecimento que
              <span>transforma vidas.</span>
            </h1>

            <p>
              Acreditamos que o acesso ao conhecimento pode abrir
              portas, desenvolver talentos e criar novas
              oportunidades para a comunidade.
            </p>

            <div className={styles.heroButtons}>

              <a
                href="https://wa.me/5521984772396?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."  
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <FaWhatsapp />
                Quero apoiar
              </a>

              <Link
                to="/doacoes"
                className={styles.secondaryButton}
              >
                <FaHeart />
                Faça uma doação
              </Link>

            </div>

          </div>

          <div className={styles.heroIcon}>
            <FaGraduationCap />
          </div>

        </div>
      </section>


      {/* =========================
          INTRODUÇÃO
      ========================= */}

      <section className={styles.introduction}>

        <div className={styles.container}>

          <div className={styles.sectionIntro}>

            <span>Projetos prontos</span>

            <h2>
              Temos projetos. Precisamos de apoio para colocá-los
              em ação.
            </h2>

            <p>
              Buscamos proporcionar oportunidades de aprendizado,
              desenvolvimento, inclusão e geração de novas
              possibilidades para a comunidade.
            </p>

            <p>
              Atualmente, contamos com diversos projetos já
              estruturados, que estão com os{" "}
              <strong>
                projetos prontos para serem colocados em ação
              </strong>
              . Para isso, precisamos de apoio, parceiros e
              recursos que possibilitem a sua realização.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CURSOS
      ========================= */}

      <section className={styles.projects}>

        <div className={styles.container}>

          <div className={styles.sectionHeader}>

            <div>

              <span className={styles.sectionTag}>
                Nossas oportunidades
              </span>

              <h2>
                Conheça os projetos que queremos colocar em prática.
              </h2>

            </div>

          </div>


          <div className={styles.projectsGrid}>

            {cursos.map((curso) => (

              <article
                key={curso.id}
                className={styles.projectCard}
              >

                <div className={styles.projectNumber}>
                  {String(curso.id).padStart(2, "0")}
                </div>

                <div className={styles.projectIcon}>
                  <FaGraduationCap />
                </div>

                <h3>{curso.titulo}</h3>

                <p>{curso.descricao}</p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          POR QUE PRECISAMOS DE APOIO
      ========================= */}

      <section className={styles.support}>

        <div className={styles.container}>

          <div className={styles.supportContent}>

            <span className={styles.sectionTag}>
              Precisamos de você
            </span>

            <h2>
              Um projeto pronto precisa de apoio para sair do papel.
            </h2>

            <p>
              Os projetos já foram pensados e estruturados, mas
              precisamos de recursos, materiais, equipamentos,
              profissionais e parceiros para que eles possam
              realmente começar.
            </p>

            <p>
              Cada contribuição pode representar uma oportunidade
              de aprendizado, uma nova habilidade ou até mesmo uma
              possibilidade de geração de renda para alguém da
              comunidade.
            </p>

            <div className={styles.supportHighlight}>

              <FaTools />

              <div>

                <strong>
                  Transforme um projeto em uma oportunidade.
                </strong>

                <span>
                  Sua ajuda pode fazer parte dessa transformação.
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FORMAS DE APOIAR
      ========================= */}

      <section className={styles.help}>

        <div className={styles.container}>

          <div className={styles.sectionIntro}>

            <span>Faça parte</span>

            <h2>
              Existem muitas formas de ajudar.
            </h2>

            <p>
              Você pode contribuir com recursos, conhecimento,
              materiais, serviços ou seu próprio tempo.
            </p>

          </div>


          <div className={styles.helpGrid}>

            {formasDeApoiar.map((forma) => (

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


      {/* =========================
          CTA FINAL
      ========================= */}

      <section className={styles.cta}>

        <div className={styles.ctaContent}>

          <FaGraduationCap />

          <h2>
            Juntos podemos transformar conhecimento em oportunidade.
          </h2>

          <p>
            Apoie os projetos do Nova Cidade Juntos Somos Mais
            Fortes e ajude a levar aprendizado, inclusão e novas
            oportunidades para a comunidade.
          </p>

          <div className={styles.ctaButtons}>

            <Link
              to="/doacoes"
              className={styles.secondaryButton}
            >
              <FaHeart />
              Quero doar
            </Link>

            <a
              href="https://wa.me/5521984772396?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."  
                target="_blank"
                rel="noopener noreferrer"
              className={styles.whatsappButton}
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

export default Cursos;