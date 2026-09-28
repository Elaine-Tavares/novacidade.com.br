import { useLocation } from 'react-router-dom';
import styles from './SejaVoluntario.module.css'
import { useEffect } from 'react';

export default function SejaVoluntario() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.page_seja_voluntario}>
      <h1>Seja Voluntário</h1>
    </main>
  )
}
