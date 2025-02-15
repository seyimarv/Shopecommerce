import PropTypes from "prop-types";

const CheckBox = ({ label }) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="form-checkbox" /> {label}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string,
};

export default CheckBox;
