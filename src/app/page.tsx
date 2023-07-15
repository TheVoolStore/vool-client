import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <div className={styles.firstSectionContent}>
          <div>
            <h1>
              GO AHEAD <br /> AND <br />
              COP IT
            </h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section className={styles.thirdSection}>bottom</section>
    </main>
  );
}
