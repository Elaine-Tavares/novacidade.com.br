import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";
import Logo from '../../assets/logo.webp'

import styles from "./Navbar.module.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <NavLink to="/" className={styles.logo} onClick={fecharMenu}>
          <img className={styles.logo_img} src={Logo} alt="Logo" />
        </NavLink>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENU */}
        <nav
          className={`${styles.nav} ${
            menuAberto ? styles.navAberto : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/quemsomos"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Quem Somos
          </NavLink>

          <NavLink
            to="/cursos"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Cursos
          </NavLink>

          <NavLink
            to="/distribuicaodequentinhas"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Distribuição de Quentinhas
          </NavLink>

          <NavLink
            to="/distribuicaodecestasbasicas"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Distribuição de Cestas Básicas
          </NavLink>

          <NavLink
            to="/sejavoluntario"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Seja Voluntário
          </NavLink>

           <NavLink
            to="/sejaparceiro"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Seja Parceiro
          </NavLink>

          <NavLink
            to="/contato"
            onClick={fecharMenu}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contato
          </NavLink>

          <NavLink
            to="/doe"
            onClick={fecharMenu}
            className={styles.doeButton}
          >
            <FaHeart />
            Doe
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;