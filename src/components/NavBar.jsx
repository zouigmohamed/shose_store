import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";
const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray" href={item.href}>{item.label}</a>
            </li>
          ))}
              </ul>
              <div className="hidden max-lg:block">
                  <img src={hamburger} alt="hamburger" width={25} height={25}/>
              </div>
      </nav>
    </header>
  );
};

export default NavBar;
