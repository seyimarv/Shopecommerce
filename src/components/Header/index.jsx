import navItems from "../../utils/nav-items";
import LinkDropdown from "../LinkDropdown";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import CurrencyPicker from "../CurrencyPicker";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState("initial");
  const lastScrollY = useRef(0);
  const ticking = useRef(false); // Prevent multiple rAF calls at once
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          console.log(currentScrollY, lastScrollY.current);

          if (currentScrollY <= 102) {
            setIsSticky("initial");
          } else if (currentScrollY < lastScrollY.current) {
            setIsSticky("sticky"); // Scrolling up → Make header sticky
          } else {
            setIsSticky("false"); // Scrolling down → Remove sticky
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-[3.875rem] w-full top-0 z-50 bg-background transition-all duration-300 ${
        !isHomePage && isSticky !== "sticky" ? "border-b border-b-gray-300" : ""
      } ${
        isSticky === "initial"
          ? "opacity-100"
          : isSticky === "sticky"
          ? "sticky top-0 opacity-100 shadow-lg translate-y-0"
          : "opacity-0 pointer-events-none translate-y-[-50%]"
      }`}
    >
      <nav className="h-full flex justify-between w-full gap-4 items-center container">
        <div className="w-30">
          <img src={logo} alt="logo" className="" />
        </div>
        <ul className="flex gap-16 w-full justify-center">
          {navItems.map(({ title, path, hasDropdown, dropdown }, i) => (
            <li key={i}>
              {hasDropdown ? (
                <LinkDropdown
                  title={title}
                  path={path}
                  dropdownList={dropdown}
                />
              ) : (
                <a href={path} className="uppercase">
                  {title}
                </a>
              )}
            </li>
          ))}
          <li>
            <CurrencyPicker />
          </li>
        </ul>
        <ul className="flex gap-6 w-full flex-1 justify-end text-md">
          <li>
            <CiUser className="text-lg" size={20} />
          </li>
          <li>
            <CiSearch size={20} />
          </li>
          <li>
            <CiShoppingCart size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
