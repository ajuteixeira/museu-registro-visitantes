import FormularioVisitante from "../components/FormularioVisitante";
import Header from "../components/Header";

export default function RegistroVisitante() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start gap-24 bg-center bg-cover bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <FormularioVisitante />
      </section>
    </>
  );
}
