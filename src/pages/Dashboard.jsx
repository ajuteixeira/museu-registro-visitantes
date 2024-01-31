import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start gap-24 bg-[#f4f4f4]">
        <Header />
        <Footer />
      </section>
    </>
  );
}
