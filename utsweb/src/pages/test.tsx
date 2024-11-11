// pages/index.js
import Head from 'next/head';
import styles from '../styles/Landing.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="A simple landing page built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Landing Page</h1>
        <p className={styles.description}>
          This is a simple landing page created using Next.js.
        </p>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Get Started &rarr;</h2>
            <p>Learn how to set up your Next.js project.</p>
          </a>
          <a href="#" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}