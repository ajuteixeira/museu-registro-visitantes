import FormularioVisitante from "../components/FormularioVisitante";
import Header from "../components/Header";

export default function RegistroVisitante() {
  return (
    <>
      <section className="h-screen bg-center bg-cover bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <FormularioVisitante />
      </section>
    </>
  );
}
