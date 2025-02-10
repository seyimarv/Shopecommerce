/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Modal from "../../LandingPage/components/modal";
import { gsap, useGSAP } from "../../utils/gsap";
import Button from "../button";
import Picture2 from "../../assets/picture2.jpg";
import ProductSelector from "../../LandingPage/components/modal/productselector";

const Card = ({ imgSrc, title, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const cardRef = useRef();
  const buttonRef = useRef();

  const { contextSafe } = useGSAP(
    () => {
      gsap.set(".button", {
        opacity: 0,
        y: 20,
        pointerEvents: "none",
      });
    },
    { scope: cardRef }
  );

  const resetAnimation = () => {
    const image = cardRef.current.querySelector(".image");
    const button = cardRef.current.querySelector(".button");

    // Kill any ongoing animations on this card before starting a new one
    gsap.killTweensOf([image, button]);
  };
  const handleMouseEnter = contextSafe(() => {
    resetAnimation();
    gsap.to(".image", {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(".button", {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    resetAnimation();
    gsap.to(".image", {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(".button", {
      opacity: 0,
      y: 20,
      pointerEvents: "none",
      duration: 0.2,
      ease: "power2.in",
    });
  });

  return (
    <div
      className="relative cursor-pointer w-full"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden w-full h-90 rounded-sm">
        <img
          src={imgSrc}
          className="object-cover w-full h-full object-center image"
          alt={title}
        />
      </div>
      <Button
        onClick={handleAddToCart}
        ref={buttonRef}
        className="button absolute bottom-18 w-[80%] min-w-auto left-1/2 transform -translate-x-1/2"
        small
      >
        Add to cart
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img src={Picture2} className="h-132 rounded rounded-r-none" alt="" />
        <div className="p-12 py-10 flex flex-col gap-5">
          <div>
            <p className="text-xs font-extralight uppercase mb-2">ShopHaul</p>
            <h3 className="text-xl uppercase">Black Gel Pens</h3>
          </div>
          <div className="flex items-center gap-x-0.5">
            <span className="text-xs">$</span>
            <span className="text-lg">34</span>
          </div>

          {/* <div>
            <h3>Color:</h3>
            <span>blue</span>
          </div>

          <div className="flex">
            <img src={Picture2} className="h-5" alt="" />
            <img src={Picture2} className="h-5" alt="" />
          </div> */}

          <ProductSelector />
        </div>
      </Modal>

      <div className="pt-2 flex flex-col px-1 font-light">
        <span className="tracking-wider text-md">{title}</span>
        <span className="text-sm">{price}</span>
      </div>
    </div>
  );
};

export default Card;
