import { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "./dropdown";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CustomSelect = ({
  options,
  placeholder,
  onChange,
  defaultOption,
  className,
  buttonClassName,
}) => {
  const [selectOption, setSelectOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onSelect = (option) => {
    onChange(option);
    setSelectOption(option);
  };

  return (
    <div className={`text-sm ${className}`}>
      <button
        className={`flex gap-1 py-[.6rem] px-4 border items-center min-w-[5.5rem] w-full rounded-lg justify-between cursor-pointer tracking-wider ${buttonClassName}`}
        onClick={toggleDropdown}
      >
        <span className="text-xs">{selectOption?.label || placeholder}</span>
        {isOpen ? <FaAngleUp size={15} /> : <FaAngleDown size={15} />}
      </button>
      <Dropdown
        options={options}
        isOpen={isOpen}
        onClose={onClose}
        onSelect={onSelect}
      />
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

CustomSelect.defaultProps = {
  placeholder: "Select an option",
};

export default CustomSelect;
