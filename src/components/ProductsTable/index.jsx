import PropTypes from "prop-types";
import QuantitySelector from "../QuantitySelector";
import DeleteButton from "../DeleteButton";
import { useState } from "react";
import TextArea from "../TextArea";
import Button from "../button";

const ProductTable = ({ data }) => {
  const tableHeaderClass =
    "px-4 py-4 font-normal text-secondary uppercase text-sm";
  const tableBodyClass = "px-4 py-8 align-top";
  const [note, setNote] = useState("");
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-secondary font-light">
            <th className={`${tableHeaderClass} text-left`}>Product</th>
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
                  <p className="font-normal text-base tracking-wide">
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
                <div className="flex flex-col justify-center items-end gap-2">
                  <span className="text-base tracking-wide">
                    ${item.total.toFixed(2)}
                  </span>
                  <DeleteButton />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="pt-8 mb-2 font-medium text-gray-500">Leave Shophaul a Note</p>
      <div className="flex justify-between">
        <TextArea
          id="message"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type something..."
          rows={6}
          className="border-gray-300"
        />
        <div className="flex flex-col gap-8">
          <p className="uppercase text-2xl">SUBTOTAL</p>
          <span className="text-sm">Shipping calculated at checkout</span>
          <Button className="w-xs">check out</Button>
        </div>
      </div>
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