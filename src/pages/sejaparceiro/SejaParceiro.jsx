import { useLocation } from 'react-router-dom';
import styles from './SejaParceiro.module.css'
import { useEffect } from 'react';

export default function SejaParceiro() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={styles.page_seja_parceiro}>
        <h1>Seja Parceiro</h1>
    </main>
  )
}
