
import styles from '../styles/mainMenu.module.css';
const landingPage = () => {
    return (

        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Lorem Ipsum Shop</h1>
            <div className={styles.grid}>
              <a href="/product" className={styles.card}>
                <h2>Check Out Product &rarr;</h2>
                <p>Click here to check out product</p>
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
  };
  
  export default landingPage;