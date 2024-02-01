import Header from "../components/Header";
import Footer from "../components/Footer";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

export default function Dashboard() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start gap-24 bg-[#f4f4f4]">
        <Header />
        <div className="w-full h-full flex items-center justify-center gap-5 flex-wrap">
          <div className="w-2/5 h-1/2 p-5 flex flex-col items-center justify-between rounded-lg bg-white">
            <div className="w-full px-2 flex justify-between">
              <span>teste</span>
              <span>teste</span>
            </div>
            <LineChart />
          </div>
          <div className="w-2/5 h-1/2 p-5 flex items-center justify-between rounded-lg bg-white">
            <div className="flex flex-col">
              <spa>teste</spa>
              <spa>teste</spa>
              <spa>teste</spa>
            </div>
            <PieChart />
          </div>
          <div className="w-2/5 h-1/2 p-5 flex flex-col items-center justify-between rounded-lg bg-white">
            <div className="w-full px-2 flex justify-between">
              <span>teste</span>
              <span>teste</span>
            </div>
            <BarChart />
          </div>
          <div className="w-2/5 h-1/2 p-5 flex items-center justify-between rounded-lg bg-white">
            <div className="flex flex-col">
              <spa>teste</spa>
              <spa>teste</spa>
              <spa>teste</spa>
            </div>
            <PieChart />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
