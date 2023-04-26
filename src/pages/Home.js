import AddCovidForm from "../components/AddCovidForm/AddCovidForm";
import Footer from "../components/Footer/Footer";
import Hello from "../components/Hello";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import Navbar from "../components/Navbar/Navbar";
import Provinsi from "../components/Provinsi/Provinsi";
import { useState } from "react";
import data from "../utils/constants/indonesia"
import data1 from "../utils/constants/provinces"

function Main() {
  const [provinsi, setProvinsi] = useState(data1);
  const [indonesia] = useState(data);
  return (
    <main>
      <Hero />
      <Indonesia indonesia={indonesia} />
      <Provinsi provinsi={provinsi} />
      <Hello />
      <AddCovidForm provinsi={provinsi} setProvinsi={setProvinsi} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
