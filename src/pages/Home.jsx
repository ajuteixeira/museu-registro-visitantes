import Footer from "../components/Footer";
import VisitorForm from "../components/VisitorForm";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <section className="h-full flex flex-col items-center justify-start gap-12 bg-center bg-cover bg-no-repeat bg-fixed bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <VisitorForm />
        <Footer />
      </section>
    </>
  );
}
