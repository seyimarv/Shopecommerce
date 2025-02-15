import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Divider from "../Divider";
import CurrencyInput from "../input/CurrencyInput";
import CheckBox from "../CheckBox";

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
            className="absolute left-0  min-w-xs bg-white border-1 border-gray-500  rounded-lg shadow-lg z-100 mt-4 whitespace-nowrap"
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
        <CheckBox label="in stock(30)" />
        <CheckBox label="out of stock(40)" />
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
