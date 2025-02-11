import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../banner";

const Layout = () => {
  return (
    <div className="relative">
      <Banner
        announcements={[
          "🎁 FREE STICKER SET ON ORDERS OVER $60!",
          "🚚 Enjoy FREE shipping on all orders above $100!",
          "🔥 Limited-time sale: Get 20% off on all items!",
          "🎉 New arrivals just dropped! Check them out now!",
        ]}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
