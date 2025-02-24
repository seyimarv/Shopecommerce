import { useState } from "react";
import PropTypes from "prop-types";
import { products } from "../../utils/mockData";
import CartProduct from "../CartProduct";
import { GoPencil } from "react-icons/go";
import Button from "../button";
import Note from "./Note";
import Drawer from "../Drawer";
import useLayout from "../../hooks/useLayout";

const CartModal = ({ isOpen, onClose }) => {
  const [isNoteOpen, setOpenNote] = useState(false);
  const { topOffset } = useLayout();
  console.log(topOffset);

  const openNote = () => {
    setOpenNote(true);
  };

  const closeNote = () => {
    setOpenNote(false);
  };

  return (
    // <div
    //   className={`fixed h-[calc(100vh-6.875rem)] w-full z-[1000] border border-t-gray-200
    //   transition-opacity duration-500 ${
    //     isOpen
    //       ? "opacity-100 pointer-events-auto"
    //       : "opacity-0 pointer-events-none"
    //   }`}
    // >

    //   <div
    //     className={`bg-black/50 h-full transition-opacity duration-500 ${
    //       isOpen ? "opacity-100" : "opacity-0"
    //     }`}
    //     onClick={onClose}
    //   ></div>
    // </div>
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        style={{
          top: `${topOffset}px`,
          height: `calc(100vh - ${topOffset}px)`,
        }}
      >
        <Note isOpen={isNoteOpen} onClose={closeNote} />
        <div className="flex flex-col px-8 h-[72%]">
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
          <button
            className="w-full mb-6 p-2 border-t border-b border-gray-400 tracking-wider uppercase text-sm flex items-center justify-center gap-2 cursor-pointer"
            onClick={openNote}
          >
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
      </Drawer>
    </>
  );
};

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
