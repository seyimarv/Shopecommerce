import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const ProductSelector = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState(null);
  const colors = [
    { name: "Black", value: "Black", className: "bg-black" },
    { name: "Beige", value: "Beige", className: "bg-yellow-100" },
    {
      name: "White",
      value: "white",
      className: "bg-white border border-gray",
    },
  ];

  const sections = ["details", "description"];

  return (
    <div className="flex flex-col gap-5 tracking-wider">
      <h2 className="text-sm">Color - {selectedColor}</h2>
      <div className="flex flex-row gap-2">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`w-8 h-8 rounded-full ${
              color.className
            } flex items-center justify-center border-2 ${
              selectedColor === color.value ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setSelectedColor(color.value)}
          >
            {selectedColor === color.value && (
              <div className="w-3 h-3 bg-white rounded-full" />
            )}
          </button>
        ))}{" "}
      </div>

      <div className="mt-5 border-t border-gray-400">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-400 py-3">
            <button
              className="flex justify-between w-full text-left font-normal text-gray-800"
              onClick={() =>
                setOpenSection(openSection === section ? null : section)
              }
            >
              {section}

              <IoChevronDownSharp
                className={`w-5 h-5 transition-transform ${
                  openSection === section ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === section && (
              <p className="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4 my-6">
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

        <button className="uppercase p-15 py-2 border rounded-md hover:bg-gray-800 hover:text-white">
          Add to cart
        </button>
      </div>

      <div className="uppercase text-center hover:underline underline-offset-6">
        View Full Details
      </div>
    </div>
  );
};

export default ProductSelector;
