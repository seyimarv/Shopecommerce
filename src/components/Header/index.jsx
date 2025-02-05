import navItems from "../../utils/nav-items";
import LinkDropdown from "../LinkDropdown";
// import { FaUser } from "react-icons/fa6";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import CurrencyPicker from "../CurrencyPicker";

const Header = () => {
  return (
    <header className="py-4 container w-full">
      <nav className="flex justify-between w-full gap-4 items-center">
        <p className="flex-1">LOGO</p>
        <ul className="flex gap-16 w-full flex-2 justify-center">
          {navItems.map(({ title, path, hasDropdown, dropdown }, i) => (
            <li key={i}>
              {hasDropdown ? (
                <LinkDropdown
                  title={title}
                  path={path}
                  dropdownList={dropdown}
                />
              ) : (
                <a href={path}>{title}</a>
              )}
            </li>
          ))}
          <li>
            <CurrencyPicker />
          </li>
        </ul>
        <ul className="flex gap-16 w-full flex-1 justify-end text-md">
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
