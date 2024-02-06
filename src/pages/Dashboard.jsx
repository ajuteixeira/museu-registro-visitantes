import { useState, useEffect } from "react";
import { API } from "../services";

import Header from "../components/Header";
import CustomPieChart from "../components/CustomPieChart";
import CountData from "../utils/CountData";
import CustomBarChart from "../components/CustomBarChart";

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
      <section className="h-full bg-[#f4f4f4]">
        <Header />
        <div className="mr-24 flex justify-end">
          <button className="p-3 mt-8 rounded-md border cursor-pointer bg-[#e3e7e8] hover:bg-[#d8dcdd]">
            Baixar PDF
          </button>
        </div>
        <div className="w-full pt-8 pb-16 h-full flex items-center justify-center gap-6 flex-wrap">
          <CustomPieChart
            title="Visitantes por cidade"
            data={CountData(visitante, "visitante_cidade")}
          />
          <CustomBarChart
            title="Visitantes por bairro"
            color="#8884d8"
            data={CountData(visitante, "visitante_bairro")}
          />
          <CustomBarChart
            title="Visitantes por mês"
            color="#8884d8"
            data={CountData(visitante, "visitante_data")}
          />
          <CustomPieChart
            title="Visitantes por gênero"
            data={CountData(visitante, "visitante_genero")}
          />
        </div>
      </section>
    </>
  );
}
