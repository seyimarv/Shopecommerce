import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaSearch, FaTimes } from "react-icons/fa";
import Picture2 from "../../assets/picture2.jpg";

const products = [
  {
    id: 1,
    name: "Cheesecake Milkie Keychain",
    price: "$11.50",
    link: "#",
    image: Picture2,
  },
  {
    id: 2,
    name: "Meowy Christmas Greeting Card",
    price: "$6.90",
    link: "#",
    image: Picture2,
  },
  {
    id: 3,
    name: "Merry Christmas Greeting Card Set of 3",
    price: "$18.00",
    link: "#",
    image: Picture2,
  },
  {
    id: 4,
    name: "Monstera Milkie Keychain",
    price: "$11.50",
    link: "#",
    image: Picture2,
  },
  {
    id: 5,
    name: "Milkie Cheesecake Magnet",
    price: "$4.90",
    link: "#",
    image: Picture2,
  },
  {
    id: 6,
    name: "Milkie Keychain",
    price: "$11.50",
    link: "#",
    image: Picture2,
  },
  {
    id: 7,
    name: "Set of 3 Plant Milkie Keychains",
    price: "$34.50",
    link: "#",
    image: Picture2,
  },
];

export default function SearchModal({ setIsOpen }) {
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const closeIconRef = useRef(null);

  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (closeIconRef.current) {
      gsap.set(closeIconRef.current, { rotation: 0, scale: 1 });
    }
  }, []);

  return (
    <div className="absolute">
      <div
        ref={searchRef}
        className="fixed top-10 left-0 w-full bg-white p-6 flex flex-col items-center shadow-lg z-50"
      >
        <div className="w-full max-w-lg flex items-center border border-gray-300 p-3 rounded-full">
          <FaSearch className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full outline-none text-lg bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={() => setIsOpen(false)}
            onMouseEnter={() => {
              if (closeIconRef.current) {
                gsap.to(closeIconRef.current, {
                  rotation: 360,
                  scale: 0.8,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            }}
            onMouseLeave={() => {
              if (closeIconRef.current) {
                gsap.to(closeIconRef.current, {
                  rotation: 0,
                  scale: 1,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            }}
          >
            <FaTimes
              ref={closeIconRef}
              size={20}
              className="text-gray-600 hover:text-black"
            />
          </button>
        </div>
        {query && (
          <ul className="w-full max-w-lg mt-4 bg-white shadow-md rounded-lg p-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.link}
                    className="block py-2 px-4 text-lg text-gray-700 hover:underline hover:bg-gray-100 rounded-md"
                  >
                    {product.name} - {product.price}
                  </a>
                </li>
              ))
            ) : (
              <li className="py-2 px-4 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
