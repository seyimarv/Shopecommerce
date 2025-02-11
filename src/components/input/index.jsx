import PropTypes from "prop-types";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  name,
}) => {
  return (
    <div className="h-[48px]">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        className="border border-gray-300 rounded-xl py-4 px-4 pr-14 focus:outline-none focus:border-gray-900 h-full bg-transparent w-full"
      />
      {error && <p className="text-xs text-danger text-left p-1">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel", "url"]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Input;
