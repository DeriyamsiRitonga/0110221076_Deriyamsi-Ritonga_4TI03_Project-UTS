import styles from "./Konoha.module.css";

function Konoha(props) {
    // Lakukan destructing 
    const { konoha } = props;
    return (
        <div className={styles.card__judul}>
            <div className={styles.card}>
                <h2>{konoha.status}</h2>
                <h1>{konoha.total}</h1>
            </div>
        </div>
    );
}

export default Konoha;