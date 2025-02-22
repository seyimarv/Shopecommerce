import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { products } from "../../utils/mockData";
import CartProduct from "../CartProduct";
import { GoPencil } from "react-icons/go";
import Button from "../button";

const CartModal = ({ isOpen = true, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useOnClickOutside(modalRef, onClose);

  return (
    <div
      className={`fixed top-0 right-0 h-[calc(100vh-6.875rem)] mt-[6.875rem] w-full z-[1000] border border-t-gray-200 
      transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white w-full max-w-[450px] h-full z-[1001] absolute right-0 transition-transform duration-500 ease-in-out overflow-y-scroll
        ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <div className="flex flex-col px-8 h-[70%]">
          {products.map((data, id) => (
            <CartProduct
              imgSrc={data.imgSrc}
              price={data.price}
              title={data.product}
              key={id}
            />
          ))}
        </div>
        <div className="">
          <button className="w-full mb-6 p-2 border-t border-b border-gray-400 tracking-wider uppercase text-sm flex items-center justify-center gap-2 cursor-pointer">
            <GoPencil />
            <span> write a note</span>
          </button>
          <div className="flex w-full justify-between px-8">
            <p className="text-xl font-normal">
              SUBTOTAL
              <span className="block mt-1 text-sm font-light">
                Shipping calculated at checkout
              </span>
            </p>
            <span className="text-lg">30USD</span>
          </div>
          <div className="flex w-full justify-between px-6 mt-4">
            <Button>check out</Button>
            <Button variant="outline">view all</Button>
          </div>
        </div>
      </div>
      <div
        className={`bg-black/50 h-full transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
    </div>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
