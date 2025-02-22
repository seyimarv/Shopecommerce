import { useState } from "react";
import PropTypes from "prop-types";

const QuantityButton = ({ onClick, disabled, ariaLabel, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full text-xl font-light cursor-pointer disabled:cursor-not-allowed"
  >
    <span className="font-light text-lg">{children}</span>
  </button>
);

QuantityButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const QuantitySelector = ({ min, max, initial, onChange }) => {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  return (
    <div className="flex items-center gap-4 font-light">
      <QuantityButton
        onClick={() => updateQuantity(quantity - 1)}
        disabled={quantity === min}
        ariaLabel="Decrease quantity"
      >
        –
      </QuantityButton>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const newValue = e.target.value === "" ? "" : Number(e.target.value);
          setQuantity(newValue);
        }}
        onBlur={() => {
          if (quantity === "" || isNaN(quantity)) setQuantity(min);
        }}
        className="w-5 text-center text-sm font-light outline-none bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        min={1}
      />
      <QuantityButton
        onClick={() => updateQuantity(quantity + 1)}
        disabled={quantity === max}
        ariaLabel="Increase quantity"
      >
        +
      </QuantityButton>
    </div>
  );
};

QuantitySelector.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  initial: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuantitySelector;
