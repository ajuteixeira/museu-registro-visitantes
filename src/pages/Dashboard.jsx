import { useState, useEffect } from "react";
import { API } from "../services";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomPieChart from "../components/CustomPieChart";
import CountData from "../utils/CountData";

export default function Dashboard() {
  const [visitante, setVisitante] = useState([]);

  const getVisitante = async () => {
    const visitante = await API.get("visitante");
    setVisitante(visitante["data"]);
  };

  useEffect(() => {
    getVisitante();
  }, []);

  return (
    <>
      <section className="h-full flex flex-col items-center justify-start gap-24 bg-[#f4f4f4]">
        <Header />
        <div className="w-full h-full flex items-center justify-center gap-5 flex-wrap">
          <CustomPieChart data={CountData(visitante, "visitante_cidade")} />
          <CustomPieChart data={CountData(visitante, "visitante_genero")} />
        </div>
        <Footer />
      </section>
    </>
  );
}
