import { useState } from "react";

const ProductSelector = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const colors = [
    { name: "Black", value: "Black", className: "bg-black" },
    { name: "Beige", value: "Beige", className: "bg-yellow-100" },
    {
      name: "White",
      value: "white",
      className: "bg-white border border-gray-500",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-sm">Color - {selectedColor}</h2>
      <div className="flex flex-row gap-2">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full ${
              color.className
            } flex items-center justify-center border-2 ${
              selectedColor === color.value ? "border-black" : "border-red"
            }`}
            onClick={() => setSelectedColor(color.value)}
          >
            {selectedColor === color.value && (
              <div className="w-3 h-3 bg-white rounded-full" />
            )}
          </button>
        ))}{" "}
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded-full"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="text-lg font-extralight">{quantity}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded-full"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>

        <button className=" p-15 py-2 border rounded-md hover:bg-gray-800 hover:text-white">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductSelector;
