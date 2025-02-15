import PropTypes from "prop-types";
import Input from ".";

const CurrencyInput = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-1 w-full">
      <span>€</span>
      <Input
        type="text"
        placeholder={placeholder}
        className="outline-none text-sm w-full"
      />
    </div>
  );
};

CurrencyInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default CurrencyInput;
