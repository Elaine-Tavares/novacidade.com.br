import styles from "./QuemSomos.module.css";
import ImgQuemSomos from '../../assets/img_quem_somos.webp';
import ImgDiaDaPascoa from '../../assets/img_dia_da_pascoa.webp';

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
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function QuemSomos() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.sectionTag}>
              <FaHeart />
              Quem somos
            </span>

            <h1>
              Juntos, podemos fazer a diferença.
            </h1>

            <p>
              Somos um projeto social criado com o propósito de ajudar,
              acolher e transformar a realidade de pessoas e famílias
              que precisam de apoio.
            </p>
          </div>

          <div className={styles.heroImage}>
            <img
              src={ImgQuemSomos}
              alt="Voluntários realizando uma ação social"
            />
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <section className={styles.history}>
        <div className={styles.container}>
          <div className={styles.historyImage}>
            <img
              src={ImgDiaDaPascoa}
              alt="Ação social realizada pelo projeto: Dia da Páscoa"
              loading="lazy"
            />
          </div>

          <div className={styles.historyContent}>
            <span className={styles.sectionTag}>
              Nossa história
            </span>

            <h2>
              Um projeto que nasceu da vontade de ajudar.
            </h2>

            <p>
             Somos um projeto social que surgiu no ano de 2021, durante a pandemia, com o objetivo inicial de ajudar um casal de amigos durante a gestação. Conseguimos arrecadar diversos materiais para o nascimento da criança e também recebemos alimentos. Como o casal não precisou dos alimentos, resolvemos fazer uma doação para pessoas que estavam necessitando.

              Entramos em contato com a associação de moradores e realizamos um levantamento das pessoas que estavam precisando de uma cesta básica. Com as doações arrecadadas, conseguimos montar 5 cestas básicas e fazer a entrega para moradores do bairro.
            </p>

            <p>
              Uma semana depois, nos reunimos e resolvemos montar um projeto, no qual pediríamos doações aos moradores do bairro para montar cestas básicas e também preparar quentinhas para serem doadas às pessoas em situação de vulnerabilidade.
            </p>

            <p>
              Foi então que nasceu o nome do projeto: <strong>Nova Cidade Juntos Somos Mais Fortes</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSO PROPÓSITO */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionTag}>
              Nosso propósito
            </span>

            <h2>
              Solidariedade, acolhimento e oportunidades.
            </h2>

            <p>
              Mais do que oferecer assistência, buscamos construir uma
              rede de apoio capaz de gerar oportunidades e fortalecer
              nossa comunidade.
            </p>
          </div>

          <div className={styles.values}>
            <article className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHeart />
              </div>

              <h3>Solidariedade</h3>

              <p>
                Acreditamos que pequenos gestos podem transformar a vida
                de quem precisa.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaUsers />
              </div>

              <h3>União</h3>

              <p>
                Quando pessoas se unem por uma causa, conseguimos alcançar
                muito mais pessoas.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHandHoldingHeart />
              </div>

              <h3>Compromisso</h3>

              <p>
                Trabalhamos com dedicação para contribuir com nossa
                comunidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className={styles.actions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionTag}>
                Nossas ações
              </span>

              <h2>
                Como ajudamos nossa comunidade
              </h2>
            </div>
          </div>

          <div className={styles.actionsList}>
            <article className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaUtensils />
              </div>

              <div>
                <h3>Distribuição de quentinhas</h3>

                <p>
                  Preparamos e distribuímos refeições para pessoas que
                  precisam de apoio.
                </p>
                
                <strong>
                  Entregamos de  INHOAÍBA até em Bangu, quantidade de quentinhas 150.
                </strong>
                
              </div>
            </article>

            <article className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaShoppingBasket />
              </div>

              <div>
                <h3>Cestas básicas</h3>

                <p>
                  Arrecadamos alimentos e montamos cestas básicas para
                  famílias da comunidade.
                </p>

                <strong>
                  Dias, horários e locais de distribuição das cestas básicas vária de acordo com as doações.
                </strong>

              </div>
            </article>

            <article className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaGraduationCap />
              </div>

              <div>
                <h3>Cursos e oficinas</h3>

                <p>
                  Buscamos proporcionar oportunidades de aprendizado,
                  desenvolvimento, inclusão e geração de novas possibilidades
                  para a comunidade.
                </p>

                <p>
                  Atualmente, contamos com diversos projetos já estruturados,
                  que estão com os <strong>projetos prontos para serem colocados
                  em ação</strong>. Para isso, precisamos de apoio, parceiros e
                  recursos que possibilitem a sua realização.
                </p>

                <h3>Projetos prontos</h3>

                <ul className={styles.coursesList}>
                  <li>
                    <strong>01 — Terceira Idade</strong>
                  </li>

                  <li>
                    <strong>02 — Futebol Adulto</strong>
                  </li>

                  <li>
                    <strong>03 — Futebol Juniores</strong>
                  </li>

                  <li>
                    <strong>04 — Trança</strong>
                  </li>

                  <li>
                    <strong>05 — Taekwondo</strong>
                  </li>

                  <li>
                    <strong>06 — Artesãs</strong>
                  </li>

                  <li>
                    <strong>07 — Cílios</strong>
                  </li>

                  <li>
                    <strong>08 — Banda Musical</strong>
                  </li>

                  <li>
                    <strong>09 — Manicure e Pedicure</strong>
                  </li>

                  <li>
                    <strong>10 — Luta Muay Thai</strong>
                  </li>

                  <li>
                    <strong>11 — A Fome Não Espera</strong>
                  </li>

                  <li>
                    <strong>12 — Educar</strong>
                  </li>

                  <li>
                    <strong>13 — Corte de Cabelo (Masculino)</strong>
                  </li>

                  <li>
                    <strong>14 — Corte de Cabelo (Feminino)</strong>
                  </li>
                </ul>

                <p>
                  Com o apoio da comunidade, empresas e parceiros, esses projetos
                  poderão sair do papel e beneficiar ainda mais pessoas.
                </p>
              </div>
            </article>

            <article className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <FaUsers />
              </div>

              <div>
                <h3>Voluntariado</h3>

                <p>
                  Reunimos pessoas dispostas a doar seu tempo,
                  conhecimento e habilidades.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <FaHeart className={styles.ctaIcon} />

            <h2>
              Você também pode fazer parte dessa história.
            </h2>

            <p>
              Seja através de uma doação, do seu tempo ou das suas
              habilidades, toda ajuda é importante.
            </p>

            <a
               href="https://wa.me/5521984772396?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20projeto%20social%20Nova%20Cidade%20Juntos%20Somos%20Mais%20Fortes."  
                target="_blank"
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              <FaWhatsapp />
              Quero ajudar   
            </a>

            <Link 
              className={styles.doar_btn} 
              to={"/doacoes"}> 
              <FaHeart />Quero Doar
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}

export default QuemSomos;