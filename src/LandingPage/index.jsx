import Header from "../components/Header";
import Banner from "./components/banner";

const LandingPage = () => {
  return (
    <div>
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
  );
};

export default LandingPage;
