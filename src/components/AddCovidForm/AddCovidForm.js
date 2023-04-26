import React, { useState } from "react";
import styles from "./AddCovidForm.module.css";

function AddCovidForm(props) {
  const [kota, setKota] = useState(""); // Menambahkan state kota
  const [status, setStatus] = useState(""); // Menambahkan state status
  const [jumlah, setJumlah] = useState(""); // Menambahkan state jumlah

  //destructuring props
  const { provinsi, setProvinsi } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateProvinsi = () => {
      const index = provinsi.findIndex((item) => item.kota === kota);
      const foundProvince = provinsi.find((item) => item.kota === kota);

      if (status === "kasus") {
        provinsi[index] = {
          ...foundProvince,
          kasus: parseInt(foundProvince.kasus) + parseInt(jumlah),
        };
      } else if (status === "sembuh") {
        provinsi[index] = {
          ...foundProvince,
          sembuh: parseInt(foundProvince.sembuh) + parseInt(jumlah),
        };
      } else if (status === "meninggal") {
        provinsi[index] = {
          ...foundProvince,
          meninggal: parseInt(foundProvince.meninggal) + parseInt(jumlah),
        };
      } else if (status === "dirawat") {
        provinsi[index] = {
          ...foundProvince,
          dirawat: parseInt(foundProvince.dirawat) + parseInt(jumlah),
        };
      }

      setProvinsi([...provinsi]);
    };

    updateProvinsi();
  };

  const handleProvinces = (e) => {
    setKota(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleJumlah = (e) => {
    setJumlah(e.target.value);
  };

  return (
    <div className={styles.container}>
      <section className={styles.AddCovidForm}>
        <div className={styles.AddCovidForm__left}>
          <img
            className={styles.AddCovidForm__image}
            src="../image/GambarForm.png"
            alt=""
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className={styles.AddCovidForm__right}>
              <h1 className={styles.AddCovidForm__title}>Form Covid</h1>
              <div className={styles.AddCovidForm__form}>
                <label htmlFor="provinsi" className={ styles.AddCovidForm__prov}>Provinsi</label>
                <select
                  id="provinsi"
                  className={styles.AddCovidForm__input}
                  value={kota}
                  onChange={handleProvinces}
                >
                  <option value="" hidden></option>
                  {provinsi.map((provinsis) => (
                    <option key={provinsis.kota} value={provinsis.kota}>
                      {provinsis.kota}
                    </option>
                  ))}
                </select>
                <label htmlFor="status" className={ styles.AddCovidForm__status}>Status</label>
                <select
                  id="status"
                  className={styles.AddCovidForm__input}
                  value={status}
                  onChange={handleStatus}
                >
                  <option value="" hidden></option>
                  <option value="kasus">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="dirawat">Dirawat</option>
                  <option value="meninggal">Meninggal</option>
                </select>
                <label htmlFor="jumlah" className={ styles.AddCovidForm__jumlah}>Jumlah</label>
                <input
                  type="number"
                  name="jumlah"
                  id="jumlah"
                  className={styles.AddCovidForm__inputJumlah}
                  value={jumlah}
                  onChange={handleJumlah}
                />
                <button className={styles.AddCovidForm__inputSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddCovidForm;