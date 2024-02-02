import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start gap-24 bg-center bg-cover bg-no-repeat bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <LoginForm />
        <Footer />
      </section>
    </>
  );
}
