import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start gap-14 bg-center bg-cover bg-no-repeat bg-fixed bg-[url('./assets/images/bg.jpg')]">
        <Header />
        <LoginForm />
      </section>
    </>
  );
}
