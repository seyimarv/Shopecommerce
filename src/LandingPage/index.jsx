import CardList from "../components/CardList";
import Header from "../components/Header";
import Banner from "./components/banner/banner";
import HeroSection from "./components/HeroSection";
import image from "../assets/life.jpg";

const sampleLists = [
  {
    imgSrc: image,
    title: "Product 1",
    price: "$10.99",
  },
  {
    imgSrc: image,
    title: "Product 2",
    price: "$12.49",
  },
  {
    imgSrc: image,
    title: "Product 3",
    price: "$8.99",
  },
  {
    imgSrc: image,
    title: "Product 4",
    price: "$15.99",
  },
];

const LandingPage = () => {
  return (
    <div>
      <div className="h-[5.875rem]">
        {/* <Banner
          announcements={[
            "🎁 FREE STICKER SET ON ORDERS OVER $60!",
            "🚚 Enjoy FREE shipping on all orders above $100!",
            "🔥 Limited-time sale: Get 20% off on all items!",
            "🎉 New arrivals just dropped! Check them out now!",
          ]}
        /> */}
        <Banner
          announcements={[
            "🎁 FREE STICKER SET ON ORDERS OVER $60!",
            "🚚 Enjoy FREE shipping on all orders above $100!",
            "🔥 Limited-time sale: Get 20% off on all items!",
            "🎉 New arrivals just dropped! Check them out now!",
          ]}
        />

        <Header />
      </div>
      <HeroSection />
      <div className="flex flex-col gap-10 pt-10">
        <CardList lists={sampleLists} title="Items on sale" showMore />
        <CardList lists={sampleLists} title="New arrivals" showMore />
        <CardList lists={sampleLists} title="Collections" showMore />
      </div>
    </div>
  );
};

export default LandingPage;
