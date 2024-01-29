import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header className="px-6 py-5 md:px-11 md:py-8 opacity-80  bg-[#212529]">
        <img className="w-[200px] md:w-fit" src={logo} alt="logo do MIS" />
      </header>
    </>
  );
}
