/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import image from "../../assets/life.jpg";
import Button from "../button";

const Card = ({ imgSrc, title, price }) => {
  return (
    <div className="relative cursor-pointer">
      <img src={imgSrc} className="object-cover w-full h-auto rounded-sm"></img>
      <Button className="absolute bottom-18 w-[80%] min-w-auto left-1/2 transform -translate-x-1/2" small>
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
