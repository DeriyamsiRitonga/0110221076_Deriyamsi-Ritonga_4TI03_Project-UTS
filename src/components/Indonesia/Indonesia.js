import styles from "./Indonesia.module.css";
import Konoha from "../Konoha/Konoha";


function Indonesia(props) {
  const {indonesia} = props;
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.Indonesia__title}>Indonesia</h1>
        <h4 className={styles.Indonesia__data}>Data Covid Berdasarkan Indonesia</h4>
      </div>
      <div className={styles.card__container}>
        {indonesia.map(function (konoha) {
          return <Konoha key={konoha.status} konoha={konoha} />;
        })}
      </div>
    </div>
  );
}

export default Indonesia;