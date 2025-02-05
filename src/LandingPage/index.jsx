import Header from "../components/Header";
import Banner from "./components/banner/banner";
import HeroSection from "./components/HeroSection";

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
    </div>
  );
};

export default LandingPage;
