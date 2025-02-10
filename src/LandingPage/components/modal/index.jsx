import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg h-3/4 w-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 shadow-lg w-15 h-15 rounded-full font-thin text-5xl hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
