import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID</h2>
                    <h3 className={styles.hero__genre}>Monitoring Perkembangan Covid</h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Id dicta vero saepe. At recusandae facilis qui
                        minima ipsam explicabo asperiores!
                    </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image}
                        src="../image/foto covid.png" alt="" />
                </div>
            </section>

        </div>
    );
}

export default Hero;