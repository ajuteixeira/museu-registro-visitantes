import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header className="w-full px-6 py-5 md:px-11 md:py-8 relative opacity-80  bg-[#212529]">
        <img className="w-[200px] md:w-[250px]" src={logo} alt="logo do MIS" />
      </header>
    </>
  );
}
