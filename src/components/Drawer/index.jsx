import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Drawer = ({ isOpen, onClose, position = "right", children }) => {
  const drawerRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useOnClickOutside(drawerRef, onClose);

  const positionClasses = {
    top: "top-0 left-0 w-full h-auto translate-y-[-100%]",
    right: "top-0 right-0 h-full w-80 translate-x-full",
    bottom: "bottom-0 left-0 w-full h-auto translate-y-full",
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        ref={drawerRef}
        className={`bg-white shadow-lg z-[1001] transition-transform duration-500 ease-in-out overflow-y-auto ${
          positionClasses[position]
        } ${isOpen ? "translate-x-0 translate-y-0" : ""}`}
      >
        <div className="bg-white">{children}</div>
      </div>
      <div
        className={`bg-black/50 inset-0 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
    </div>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["top", "right", "bottom"]),
  children: PropTypes.node,
};

export default Drawer;
