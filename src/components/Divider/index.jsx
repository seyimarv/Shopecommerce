import PropTypes from "prop-types";

const Divider = ({ className }) => {
  return (
    <div className={`flex-grow border-t border-gray-400 ${className}`}></div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
