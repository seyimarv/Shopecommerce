import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import Picture from "../../assets/picture2.jpg";

const product = {
  title: "EMBROIDERY CAP - B GRADE",
  price: { original: 26.5, discounted: 23.0 },
  description:
    "Lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut lorem. Lorem ipsum dolor sit amet, conlore, sed do eiusmod tempor incid lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut lorem. Lorem ipsum dolor sit amet, conlore, sed do eiusmod tempor incid",
  colors: [
    { value: "black", className: "bg-black" },
    { value: "beige", className: "bg-[#F5F2DA]" },
    { value: "white", className: "bg-white border" },
  ],
  images: [
    "../../assets/picture2.jpg",
    "../../assets/picture2.jpg",
    "../../assets/picture2.jpg",
    "../../assets/picture2.jpg",
  ],
  sections: ["DETAILS", "MATERIAL", "CARE"],
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8 tracking-wider">
      <div>
        <img
          src={Picture}
          alt="Cap"
          className="rounded-lg w-full h-3/5 object-cover object-center"
        />
        <div className="flex w-xs border-7 border-red mt-4 mx-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={Picture}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 cursor-pointer object-cover object-center ${
                selectedImage === img ? "border-black" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-thin">{product.title}</h1>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-lg font-bold text-red-500">
            ${product.price.discounted.toFixed(2)}
          </span>
          <span className="text-gray-500 line-through">
            ${product.price.original.toFixed(2)}
          </span>
          <span className="bg-red-100 text-red-600 px-2 py-1 text-xs rounded">
            SALE
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-thin">Color — {selectedColor}</h3>
          <div className="flex gap-2 mt-3">
            {product.colors.map((color) => (
              <button
                key={color.value}
                className={`w-8 h-8 rounded-full ${
                  color.className
                } flex items-center justify-center border-2 ${
                  selectedColor === color.value
                    ? "border-black"
                    : "border-gray-200"
                }`}
                onClick={() => setSelectedColor(color.value)}
              >
                {selectedColor === color.value && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="my-8 border-t border-gray-400">
          {product.sections.map((section, index) => (
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
                  More info about {section}... Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Inventore aut mollitia dolores!
                  Omnis hic nemo molestias facere dolorem doloremque odit amet
                  neque quod atque, ab odio fuga necessitatibus ea quam.
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button
            className="w-10 h-10 bg-gray-200 rounded-full"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <span className="text-lg font-extralight">{quantity}</span>
          <button
            className="w-10 h-10 bg-gray-200 rounded-full"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>

          <button className="uppercase p-40 py-2 border rounded-md hover:bg-gray-800 hover:text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
