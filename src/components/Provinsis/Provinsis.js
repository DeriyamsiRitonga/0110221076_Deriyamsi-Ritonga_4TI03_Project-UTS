import styles from "./Provinsis.module.css";

function Provinsis(props) {
    // Lakukan destructing 
    const { provinsis, no } = props;
    return (
        <tr>
            <td className={styles.Provinsi__tables}>{no}</td>
            <td className={styles.Provinsi__tables}>{provinsis.kota}</td>
            <td className={styles.Provinsi__tables}>{provinsis.kasus}</td>
            <td className={styles.Provinsi__tables}>{provinsis.sembuh}</td>
            <td className={styles.Provinsi__tables}>{provinsis.meninggal}</td>
            <td className={styles.Provinsi__tables}>{provinsis.dirawat}</td>
        </tr>
    );
}


export default Provinsis;