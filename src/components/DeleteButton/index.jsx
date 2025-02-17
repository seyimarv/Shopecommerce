import PropTypes from "prop-types";
import { RiDeleteBin5Line } from "react-icons/ri";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-sm hover:bg-gray-100 cursor-pointer"
      aria-label="Delete"
    >
      <RiDeleteBin5Line size={20} fill="#4B5563" />
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
