import styles from "./Provinsi.module.css";
import Provinsis from "../Provinsis/Provinsis";

function Provinsi(props) {
    const { provinsi } = props;

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.Provinsi__title}>Provinsi</h1>
                <h4 className={styles.Provinsi__data}>Data Covid Berdasarkan Provinsi</h4>
            </div>

            <div className={styles.table__container}>
                <table className={styles.Provinsi__tabel}>
                    <thead>
                        <tr>
                            <th className={styles.Provinsi__tables}>No</th>
                            <th className={styles.Provinsi__tables}>Provinsi</th>
                            <th className={styles.Provinsi__tables}>Positif</th>
                            <th className={styles.Provinsi__tables}>Sembuh</th>
                            <th className={styles.Provinsi__tables}>Dirawat</th>
                            <th className={styles.Provinsi__tables}>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {provinsi.map((provinsis, index) => {
                            return <Provinsis key={provinsis.kota} provinsis={provinsis} no={index + 1} />;
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default Provinsi;