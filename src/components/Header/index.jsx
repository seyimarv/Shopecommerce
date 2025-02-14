import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";
import navItems from "../../utils/nav-items";
import LinkDropdown from "../LinkDropdown";
import logo from "../../assets/logo.png";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import CurrencyPicker from "../CurrencyPicker";

const Header = () => {
  const [isSticky, setIsSticky] = useState("initial");
  const lastScrollY = useRef(0);
  const ticking = useRef(false); 
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 102) {
            setIsSticky("initial");
          } else if (currentScrollY < lastScrollY.current) {
            setIsSticky("sticky"); 
          } else {
            setIsSticky("false");
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
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>
        </div>
        <ul className="flex gap-16 w-full justify-center items-center">
          {navItems.map(({ title, path, hasDropdown, dropdown }, i) => (
            <li key={i}>
              {hasDropdown ? (
                <LinkDropdown
                  title={title}
                  path={path}
                  dropdownList={dropdown}
                />
              ) : (
                <Link to={path} className="uppercase">
                  {title}
                </Link>
              )}
            </li>
          ))}
          <li>
            <CurrencyPicker />
          </li>
        </ul>

        {/* Icons as Links */}
        <ul className="flex gap-6 w-full flex-1 justify-end text-md">
          <li>
            <Link to="/profile">
              <CiUser className="text-lg" size={20} />
            </Link>
          </li>
          <li>
            <Link to="/search">
              <CiSearch size={20} />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <CiShoppingCart size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
