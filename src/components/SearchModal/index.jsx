import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import Picture2 from "../../assets/picture2.jpg";
import { Link } from "react-router";

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
  {
    id: 8,
    name: "Milkie Keychain",
    price: "$11.50",
    link: "#",
    image: Picture2,
  },
  {
    id: 9,
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
    <div
      ref={searchRef}
      className="tracking-widest absolute top-12 left-0 w-full bg-white px-12 py-10 flex flex-col gap-3 shadow-lg z-50"
    >
      <div className="w-full max-w-lg flex items-center border border-gray-300 p-2 px-3 rounded-full self-center bg-gray-100">
        <IoSearchOutline className=" mr-3" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none text-lg"
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
          <IoCloseOutline
            ref={closeIconRef}
            size={20}
            className="text-gray-600 hover:text-black"
          />
        </button>
      </div>
      {query && (
        <div>
          <h2 className="">PRODUCTS</h2>
          <ul className="flex flex-wrap justify-between gap-y-5 mt-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="flex items-center gap-4 w-1/3">
                  <img src={product.image} className="h-15 w-15 object-cover" />
                  <div className="flex flex-col gap-1">
                    <Link
                      to=""
                      className="text-md text-gray-700 hover:underline underline-offset-4"
                    >
                      {product.name}
                    </Link>
                    <span className="text-sm">{product.price}</span>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-lg text-gray-500">
                No results found for {query}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
