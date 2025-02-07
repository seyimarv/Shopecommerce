import { FaHeart, FaStar, FaCheck, FaLightbulb } from "react-icons/fa";
import Value from "./value";

const valuesData = [
  {
    title: "Quality",
    description: "We ensure the highest standards in everything we do.",
    Icon: FaStar,
  },
  {
    title: "Trust",
    description:
      "Building strong and reliable relationships with our customers.",
    Icon: FaHeart,
  },
  {
    title: "Commitment",
    description: "Dedicated to delivering the best results consistently.",
    Icon: FaCheck,
  },
//   {
//     title: "Innovation",
//     description: "Continuously improving and embracing new ideas.",
//     Icon: FaLightbulb,
//   },
];

const ValuesList = () => {
  return (
    <div className="flex justify-center gap-12 container">
      {valuesData.map((value, index) => (
        <Value key={index} {...value} />
      ))}
    </div>
  );
};

export default ValuesList;
