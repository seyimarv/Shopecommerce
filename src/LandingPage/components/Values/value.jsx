import PropTypes from "prop-types";

const Value = ({ title, description, Icon }) => {
  return (
    <div className="flex flex-1 flex-col gap-3 items-center text-center">
      <Icon  className=" text-md" />
      <h4 className="text-sm font-normal uppercase">{title}</h4>
      <p className="text-md font-light">{description}</p>
    </div>
  );
};

Value.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // Ensures Icon is a valid React component
};

export default Value;
