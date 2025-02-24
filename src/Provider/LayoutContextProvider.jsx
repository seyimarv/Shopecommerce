import { useState, useEffect, useRef } from "react";
import { LayoutContext } from "../context/LayoutContext";
import useInView from "../hooks/useInView";
import PropTypes from "prop-types";

export const LayoutProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const headerRef = useRef(null);
  const bannerRef = useRef(null);

  const isHeaderInView = useInView(headerRef);
  const isBannerInView = useInView(bannerRef);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  useEffect(() => {
    const updateTopOffset = () => {
      const headerHeight = isHeaderInView
        ? headerRef.current?.offsetHeight || 0
        : 0;
      const bannerHeight = isBannerInView
        ? bannerRef.current?.offsetHeight || 0
        : 0;
      setTopOffset(headerHeight + bannerHeight);
    };

    updateTopOffset();
    window.addEventListener("resize", updateTopOffset);
    return () => window.removeEventListener("resize", updateTopOffset);
  }, [isHeaderInView, isBannerInView]);
  return (
    <LayoutContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        topOffset,
        headerRef,
        bannerRef,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
};
