import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import cancelCursor from "../../assets/cancel-cursor";

const Drawer = ({
  isOpen,
  onClose,
  position = "right",
  absolute = false,
  children,
  wrapperClassName,
  className,
  overlayClassName,
  ...props
}) => {
  const drawerRef = useRef();

  useEffect(() => {
    if (!absolute) {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen, absolute]);

  useOnClickOutside(drawerRef, onClose);

  const positionClasses = {
    top: "top-0 left-0 w-full h-auto",
    right: "top-0 right-0 h-full w-full max-w-[450px]",
    bottom: "bottom-0 left-0 w-full h-auto",
  };

  const closedClasses = {
    top: "translate-y-[-100%]",
    right: "translate-x-[100%]",
    bottom: "translate-y-[100%]",
  };
  const openClasses = {
    top: "translate-y-0",
    right: "translate-x-0",
    bottom: "translate-y-0",
  };

  return (
    <div
      className={`${
        absolute ? "absolute" : "fixed"
      } overflow-hidden h-full w-full z-[1000] transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } ${wrapperClassName}`}
      {...props}
    >
      <div
        className={`absolute z-[1001] transition-transform duration-500 ease-in-out overflow-y-auto ${
          positionClasses[position]
        } ${
          isOpen ? openClasses[position] : closedClasses[position]
        } ${className}`}
      >
        <div className="bg-white h-full" ref={drawerRef}>
          {children}
        </div>
      </div>
      <div
        className={`bg-black/50 h-full w-full inset-0 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${overlayClassName}`}
        onClick={onClose}
        style={{ cursor: `url(${cancelCursor}), auto` }}
      ></div>
    </div>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(["top", "right", "bottom"]),
  absolute: PropTypes.bool,
  children: PropTypes.node,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
};

export default Drawer;
