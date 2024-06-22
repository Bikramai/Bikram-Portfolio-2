import { useState } from "react";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import useScrollToSection from "@/hooks/useScrollToSection";

// eslint-disable-next-line react-refresh/only-export-components
export let menus = [
  { name: "Home", navigateTo: "headerss", no: "01" },
  { name: "Intro", navigateTo: "intro", no: "02" },
  { name: "Projects", navigateTo: "select-work", no: "03" },
  { name: "About", navigateTo: "about", no: "04" },
  { name: "Contact", navigateTo: "contact", no: "05" },
];

const Header = () => {
  const scrollToSection = useScrollToSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleNavigation = (link) => {
    scrollToSection(link);
    setMenuOpen(false);
  };

  return (
    <header id="headerss" className="bg-black sticky z-20 top-0 left-0 pl-4 md:px-16 md:opacity-80">
      <nav className="flex justify-between items-center w-full py-1 md:py-0">
        <div
          className="pt-2 md:pt-0 flex gap-1 items-end md:min-w-max h-auto cursor-pointer"
          onClick={() => scrollToSection("hero-section")}
        >
          <h1 className="text-3xl md:text-4xl leading-6 md:leading-7 font-semibold font-primary text-light-color">
            Bikram
          </h1>
          <div className="pink-dot bg-pink-color w-3 h-3 rounded-2xl"></div>
        </div>

        <div className="flex">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 md:w-auto pl-4 md:pl-0 w-full transition-all duration-500 ease-in-out bg-black ${menuOpen ? "top-11 h-screen border-t-2 border-pink-color opacity-90 pt-4" : "left-[-720px] top-11  border-t-2 border-transparent "} gap-2 md:gap-x-8 space-y-4 md:space-y-0 `}
          >
            {menus.map((link) => (
              <li
                className="flex md:grid gap-2 md:gap-0 py-2  "
                key={link.no}
                onClick={() => handleNavigation(link.navigateTo)}
              >
                <p className="cursor-pointer text-base font-secondary font-normal text-gray-color">
                  {link.no}
                </p>
                <h6 className="cursor-pointer text-base font-semibold font-primary text-light-color whitespace-nowrap border-b-2 hover:border-pink-color  border-transparent">
                  {link.name}
                </h6>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl absolute right-4 cursor-pointer fill-light-color md:hidden"
        >
          {menuOpen ? (
            <IoCloseOutline onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
          ) : (
            <IoMenuOutline onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
