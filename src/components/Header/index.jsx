import { Fragment } from "react";
import navItems from "../../utils/nav-items";
import LinkDropdown from "../LinkDropdown";

const Header = () => {
  return (
    <header className="py-4 container w-full">
      <nav className="flex justify-between w-full">
        <p className="w-[50%]">LOGO</p>
        <ul className="flex justify-between w-full">
          {navItems.map(({ title, path, hasDropdown, dropdown }, i) => (
            <Fragment key={i}>
              {hasDropdown ? (
                <LinkDropdown
                  title={title}
                  path={path}
                  dropdownList={dropdown}
                />
              ) : (
                <a href={path}>{title}</a>
              )}
            </Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
