import { useState, useRef } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Picture1 from "../../assets/picture1.jpg";
import Picture2 from "../../assets/picture2.jpg";
import Picture3 from "../../assets/picture3.jpg";
import Picture4 from "../../assets/picture4.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import MayAlsoLike from "../../components/Mayalsolike";

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
  sections: ["DETAILS", "MATERIAL", "CARE"],
};

const images = [
  Picture1,
  Picture2,
  Picture3,
  Picture4,
  Picture1,
  Picture2,
  Picture3,
  Picture4,
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
  const [openSection, setOpenSection] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const splideRef = useRef(null);

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("+1");
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("-1");
    }
  };

  return (
    <>
      <div className="container p-6 flex gap-8 tracking-wider mb-6">
        <div className="flex-1">
          <img
            src={images[selectedIndex]}
            alt="Cap"
            className="rounded-lg w-full h-[calc(100vh-6.375rem)] shadow-md object-cover object-center"
          />
          <div className="mt-7 relative">
            <button
              className="cursor-pointer p-3 rounded-full absolute shadow-lg left-10 top-10"
              onClick={goPrev}
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="bg-white p-3 rounded-lg shadow-lg w-full max-w-sm mx-auto">
              <Splide
                ref={splideRef}
                onMove={(splide) => {
                  console.log(splide.index);
                  setSelectedIndex(splide.index);
                }}
                options={{
                  type: "slide",
                  perPage: 4,
                  perMove: 1,
                  gap: "1rem",
                  pagination: false,
                  arrows: false,
                  focus: "center",
                  breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 3 },
                    480: { perPage: 1 },
                  },
                }}
              >
                {images.map((image, index) => (
                  <SplideSlide key={index}>
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-full h-24 object-cover rounded-md cursor-pointer ${
                        selectedIndex === index ? "border-2 border-black" : ""
                      }`}
                      onClick={() => setSelectedIndex(index)}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <button
              className="cursor-pointer p-3 rounded-full absolute shadow-lg right-10 top-10"
              onClick={goNext}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="pt-10 flex-1">
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
                    consectetur adipisicing elit. Inventore aut mollitia
                    dolores! Omnis hic nemo molestias facere dolorem doloremque
                    odit amet neque quod atque, ab odio fuga necessitatibus ea
                    quam.
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

            <button className="uppercase p-38 py-2 border rounded-md hover:bg-gray-800 hover:text-white">
              Add to cart
            </button>

            <GrFavorite size={25} />
          </div>
        </div>
      </div>
      <MayAlsoLike />
    </>
  );
}
