import { useState, useEffect } from "react";
import { API } from "../services";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomPieChart from "../components/CustomPieChart";
import CountData from "../utils/CountData";

export default function Dashboard() {
  const [visitantes, setVisitantes] = useState([]);

  const getVisitantes = async () => {
    const visitantes = await API.get("visitantes");
    setVisitantes(visitantes["data"]);
  };

  useEffect(() => {
    getVisitantes();
  }, []);

  return (
    <>
      <section className="h-full flex flex-col items-center justify-start gap-24 bg-[#f4f4f4]">
        <Header />
        <div className="w-full h-full flex items-center justify-center gap-5 flex-wrap">
          <CustomPieChart data={CountData(visitantes, "visitante_cidade")} />
          <CustomPieChart data={CountData(visitantes, "visitante_genero")} />
        </div>
        <Footer />
      </section>
    </>
  );
}
