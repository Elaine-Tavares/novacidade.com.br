import { useState } from "react";
import styles from "./Doacoes.module.css";

import {
  FaHeart,
  FaCopy,
  FaCheck,
  FaHandHoldingHeart,
} from "react-icons/fa";

const pix = [
  {
    id: 1,
    banco: "Banco do Brasil",
    tipo: "CNPJ",
    chave: "53.268.572-0001/12",
  },
  {
    id: 2,
    banco: "Itaú",
    tipo: "Celular",
    chave: "21 98807 4852",
  },
  {
    id: 3,
    banco: "Itaú",
    tipo: "E-mail",
    chave: "ongnovacidadejuntossomosfortes@gmail.com",
  },
];

function Doacoes() {
  const [copiado, setCopiado] = useState(null);

  async function copiarPix(chave, id) {
    try {
      await navigator.clipboard.writeText(chave);

      setCopiado(id);

      setTimeout(() => {
        setCopiado(null);
      }, 2000);
    } catch (erro) {
      console.error("Não foi possível copiar a chave Pix.", erro);
    }
  }

  return (
    <main className={styles.doacoes}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>

          <div className={styles.heroIcon}>
            <FaHeart />
          </div>

          <span className={styles.heroTag}>
            <FaHandHoldingHeart />
            Faça parte dessa transformação
          </span>

          <h1>
            Sua doação pode{" "}
            <span>fazer a diferença.</span>
          </h1>

          <p>
            Cada contribuição ajuda o projeto Juntos Somos Mais
            Fortes a continuar realizando ações e levando apoio
            para pessoas e famílias que precisam.
          </p>

        </div>
      </section>


      {/* INTRODUÇÃO */}
      <section className={styles.intro}>
        <div className={styles.container}>

          <span className={styles.sectionTag}>
           
            Doe pelo Pix
          </span>

          <h2>
            Escolha uma das opções abaixo
          </h2>

          <p>
            Você pode contribuir utilizando uma das chaves Pix
            disponibilizadas pelo projeto.
          </p>

        </div>
      </section>


      {/* CHAVES PIX */}
      <section className={styles.pixSection}>
        <div className={styles.container}>

          <div className={styles.pixList}>

            {pix.map((item) => (
              <article
                key={item.id}
                className={styles.pixCard}
              >

                <div className={styles.pixIcon}>
                
                </div>

                <span className={styles.bank}>
                  {item.banco}
                </span>

                <h2>
                  Pix por {item.tipo}
                </h2>

                <p className={styles.description}>
                  Utilize a chave abaixo para realizar sua
                  contribuição.
                </p>

                <div className={styles.keyBox}>
                  <span>Chave Pix</span>

                  <strong>
                    {item.chave}
                  </strong>
                </div>

                <button
                  type="button"
                  className={styles.copyButton}
                  onClick={() =>
                    copiarPix(item.chave, item.id)
                  }
                >
                  {copiado === item.id ? (
                    <>
                      <FaCheck />
                      Chave copiada!
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      Copiar chave Pix
                    </>
                  )}
                </button>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* MENSAGEM FINAL */}
      <section className={styles.message}>
        <div className={styles.messageContent}>

          <FaHeart />

          <h2>
            Toda contribuição importa.
          </h2>

          <p>
            Não importa o valor. Cada contribuição ajuda a
            fortalecer nossas ações e possibilita que o projeto
            continue fazendo a diferença na comunidade.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Doacoes;