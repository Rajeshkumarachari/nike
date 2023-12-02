import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute  w-full z-20">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center text-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className=" cursor-pointer">
              <a
                href={item.href}
                className=" font-montserrat cursor-pointer leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block cursor-pointer">
          <img src={hamburger} width={25} height={25} alt="hamburger_icon" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
