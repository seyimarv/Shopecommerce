import PropTypes from "prop-types";

const TextArea = ({
  label,
  value,
  onChange,
  placeholder = "Enter text...",
  rows = 4,
  className = "",
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="mb-2 font-medium text-gray-500">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`border rounded-sm p-2 w-full max-w-sm resize-none ${className}`}
        {...props}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default TextArea;
