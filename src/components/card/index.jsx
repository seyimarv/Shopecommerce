import { useRef, useState } from "react";
import Modal from "../../Pages/LandingPage/components/modal";
import { gsap, useGSAP } from "../../utils/gsap";
import Button from "../button";
import Picture2 from "../../assets/picture2.jpg";
import ProductSelector from "../../Pages/LandingPage/components/modal/productselector";
import PropTypes from "prop-types";
import { GrLinkNext } from "react-icons/gr";

const Card = ({
  imgSrc,
  title,
  price,
  sale,
  prev,
  current,
  soldOut,
  multipleOptions,
  hideButtons,
  type,
  className, // New className prop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef();
  const buttonRef = useRef();

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { contextSafe } = useGSAP(
    () => {
      if (soldOut) {
        return;
      }
      gsap.set(".button", {
        opacity: 0,
        y: 20,
        pointerEvents: "none",
      });
    },
    { scope: cardRef }
  );

  const resetAnimation = () => {
    gsap.killTweensOf([
      cardRef.current.querySelector(".image"),
      buttonRef.current,
    ]);
  };

  const handleHover = (isEntering) =>
    contextSafe(() => {
      if (soldOut) {
        return;
      }
      resetAnimation();
      gsap.to(".image", {
        scale: isEntering ? 1.05 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".button", {
        opacity: isEntering ? 1 : 0,
        y: isEntering ? 0 : 20,
        pointerEvents: isEntering ? "auto" : "none",
        duration: 0.3,
        ease: "power2.out",
      });
    })();

  return (
    <div
      className={`relative cursor-pointer w-full flex-shrink-0 `}
      ref={cardRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        className={`overflow-hidden w-full h-90 rounded-sm relative  ${className}`}
      >
        {sale && (
          <div className="absolute top-4 left-4 z-10 text-white bg-tertiary px-3 py-0.1 rounded-sm">
            <span className="text-sm uppercase tracking-wide">Save $5</span>
          </div>
        )}
        <img
          src={imgSrc}
          className="object-cover w-full h-full object-center image"
          alt={title}
        />
      </div>
      {!hideButtons && (
        <Button
          onClick={handleAddToCart}
          ref={buttonRef}
          className="button absolute bottom-18 w-[80%] min-w-auto left-1/2 transform -translate-x-1/2"
          small
          disabled={soldOut}
        >
          {soldOut
            ? "Sold Out"
            : multipleOptions
            ? "Choose options"
            : "Add to cart"}
        </Button>
      )}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img src={Picture2} className="h-full rounded rounded-r-none" alt="" />
        <div className="p-12 py-10 flex flex-col gap-5">
          <div>
            <p className="text-xs font-extralight uppercase mb-2">ShopHaul</p>
            <h3 className="text-xl uppercase">{title}</h3>
          </div>
          <div className="flex items-center gap-x-0.5">
            <span className="text-xs">$</span>
            <span className="text-lg">{current || price}</span>
          </div>
          <ProductSelector />
        </div>
      </Modal>

      <div className="pt-2 flex flex-col px-1 font-light">
        <span className="tracking-wider text-md flex items-center gap-1">
          {title} {type === "collections" && <GrLinkNext size={16} />}
        </span>
        {sale ? (
          <div className="flex gap-2 text-md">
            <span className="text-tertiary">{current}</span>
            <span className="line-through">{prev}</span>
          </div>
        ) : (
          <span className="text-md">{price}</span>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sale: PropTypes.bool,
  prev: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  soldOut: PropTypes.bool,
  multipleOptions: PropTypes.bool,
  hideButtons: PropTypes.bool,
  type: PropTypes.oneOf(["collections", "default"]),
  className: PropTypes.string, // New propType added
};

Card.defaultProps = {
  sale: false,
  prev: null,
  current: null,
  multipleOptions: false,
  soldOut: false,
  hideButtons: false,
  type: "default",
  className: "", // Default to an empty string
};

export default Card;
