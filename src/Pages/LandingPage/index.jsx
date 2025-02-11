import CardList from "../../components/CardList";
import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import picture4 from "../../assets/picture4.jpg";
import Testimonials from "./components/Testimonials";
import ValuesList from "./components/Values";
import HeroSection from "./components/HeroSection";
const sampleLists = [
  {
    imgSrc: picture1,
    title: "Product 1",
    price: "$10.99",
    sale: true,
    prev: "$12.49",
    current: "$5",
    multipleOptions: true,
  },
  {
    imgSrc: picture2,
    title: "Product 2",
    price: "$12.49",
  },
  {
    imgSrc: picture3,
    title: "Product 3",
    price: "$8.99",
    soldOut: true,
  },
  {
    imgSrc: picture4,
    title: "Product 4",
    price: "$15.99",
  },
];

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-22 pt-22 pb-22">
        <CardList lists={sampleLists} title="Items on sale" showMore />
        <CardList lists={sampleLists} title="New Arrivals" showMore />
        <CardList lists={sampleLists} title="Collections" showMore />
        <Testimonials />
        <ValuesList />
      </div>
    </>
  );
};

export default LandingPage;
