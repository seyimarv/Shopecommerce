import { useContext } from "react";
import { LayoutContext } from "../context/LayoutContext";

const useLayout = () => {
  return useContext(LayoutContext);
};

export default useLayout;
