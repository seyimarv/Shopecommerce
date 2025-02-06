/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { gsap, useGSAP } from "../../utils/gsap";
import Button from "../button";

const Card = ({ imgSrc, title, price }) => {
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
        ref={buttonRef}
        className="button absolute bottom-18 w-[80%] min-w-auto left-1/2 transform -translate-x-1/2"
        small
      >
        Add to cart
      </Button>
      <div className="pt-2 flex flex-col px-1 font-light">
        <span className="tracking-wider text-md">{title}</span>
        <span className="text-sm">{price}</span>
      </div>
    </div>
  );
};

export default Card;
