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
        <div className="relative z-50 shadow-2xl w-full" ref={ref}>
          <ul className="absolute top-1 flex flex-col min-w-full shadow-sm max-h-[14rem] overflow-scroll bg-[white] px-[20px]  border border-[#D2D5D9] py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="py-[10px] cursor-pointer rounded-sm whitespace-nowrap text-xs"
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
