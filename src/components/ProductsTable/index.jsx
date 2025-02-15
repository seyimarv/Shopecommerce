import PropTypes from "prop-types";
import QuantitySelector from "../QuantitySelector";

const ProductTable = ({ data }) => {
  const tableHeaderClass =
    "px-4 py-4 font-normal text-secondary uppercase text-xs";
  const tableBodyClass = "px-4 py-8";
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-secondary font-light">
            <th className={`${tableHeaderClass} text-left`}>Product</th>{" "}
            <th className={`${tableHeaderClass} text-left`}>Quantity</th>
            <th className={`${tableHeaderClass} text-right`}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className={`${tableBodyClass} flex gap-4 text-left`}>
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-[5rem] h-[3.2rem] object-cover"
                />
                <div>
                  <p className="font-normal text-sm tracking-wide">
                    {item.product}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </td>
              <td className={`${tableBodyClass} text-center`}>
                <QuantitySelector
                  min={1}
                  max={5}
                  initial={1}
                  onChange={(value) => console.log(value)}
                />
              </td>
              <td className={`${tableBodyClass} text-right`}>
                <span className="text-base tracking-wide">
                  ${item.total.toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductTable;
