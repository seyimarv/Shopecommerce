import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Divider from "../Divider";
import CurrencyInput from "../input/CurrencyInput";

const DropdownFilter = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const onClose = () => {
    setIsOpen(false);
  };
  useOnClickOutside(ref, onClose);

  return (
    <div className="">
      <button
        className="flex items-center justify-between w-full text-sm  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}{" "}
        <span className="ml-2">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>
      {isOpen && (
        <div className="relative w-full">
          <div
            className="absolute left-0  min-w-xs bg-white border border-gray-400  rounded-lg shadow-lg z-100 mt-1 whitespace-nowrap"
            ref={ref}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownFilter.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const AvailabilityFilter = () => {
  return (
    <DropdownFilter label="Availability">
      <div className="flex justify-between p-4 text-sm items-center text-sm">
        <p>0 selected</p>
        <span>Reset</span>
      </div>
      <Divider className="w-full" />
      <div className="p-4">
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> In stock (445)
          </label>
        </div>
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" /> Out of stock
            (40)
          </label>
        </div>
      </div>
    </DropdownFilter>
  );
};

const PriceFilter = () => {
  return (
    <DropdownFilter label="Price">
      <div className="flex justify-between p-4 text-sm items-center">
        <p>The highest price is €100,00</p>
        <span className="cursor-pointer">Reset</span>
      </div>
      <Divider className="w-full" />
      <div className="p-4 flex gap-4">
        <CurrencyInput placeholder="From" />
        <CurrencyInput placeholder="To" />
      </div>
    </DropdownFilter>
  );
};

export { AvailabilityFilter, PriceFilter };
