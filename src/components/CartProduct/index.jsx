import PropTypes from "prop-types";
import QuantitySelector from "../QuantitySelector";
import { MdOutlineCancel } from "react-icons/md";

const CartProduct = ({ title, imgSrc, price, key }) => {
  return (
    <div className="py-6 w-full border-b border-b-gray-200 w-full last:border-b-0" key={key}>
      <div className="flex gap-4">
        <img className="w-20 h-20 object-cover" src={imgSrc} alt={title} />
        <div className="w-full flex-col h-full">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium">{title}</span>
            <button className="text-gray-500 text-lg">
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex w-full justify-between items-center mt-4">
            <QuantitySelector
              min={1}
              max={5}
              initial={1}
              onChange={(value) => console.log(value)}
            />
            <span className="text-lg">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  key: PropTypes.number.isRequired,
};

export default CartProduct;
