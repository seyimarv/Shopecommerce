import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import Banner from "../banner";
import useLayout from "../../hooks/useLayout";
import CartModal from "../CartModal";

const Layout = () => {
  const { isCartOpen, closeCart } = useLayout();
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
      <CartModal isOpen={isCartOpen} onClose={closeCart} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
