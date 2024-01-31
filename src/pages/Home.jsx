import Footer from "../components/Footer";
import FormularioVisitante from "../components/FormularioVisitante";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col items-center justify-start gap-24 bg-center bg-cover bg-no-repeat bg-fixed bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <FormularioVisitante />
        <Footer />
      </section>
    </>
  );
}
