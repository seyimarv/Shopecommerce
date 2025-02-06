import PropTypes from "prop-types";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Dropdown = ({ options, onSelect, isOpen, onClose }) => {
  const ref = useRef();
  const handleSelect = (option) => {
    onSelect(option);
    onClose();
  };
  useOnClickOutside(ref, onClose);
  return (
    <>
      {isOpen && (
        <div className="relative z-50 shadow-2xl" ref={ref}>
          <ul className="absolute top-1 flex flex-col min-w-full shadow-sm max-h-[14rem] overflow-scroll bg-[white]">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer rounded-sm whitespace-nowrap"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
