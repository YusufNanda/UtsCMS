
import styles from '../styles/Landing.module.css';

export default function Home() {


  return (
    
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Lorem Ipsum Shop</h1>
        <p className={styles.description}>
          Welcome to Lorem Ipsum Shop by Yusuf
        </p>
        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>Login to your account</p>
          </a>
          <a href="/register" className={styles.card}>
            <h2>Register &rarr;</h2>
            <p>Register to your account</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Yusufi Busliananda
        </a>
      </footer>
    </div>
  );
}