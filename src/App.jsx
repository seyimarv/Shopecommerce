import LandingPage from "./Pages/LandingPage";
import "@splidejs/react-splide/css";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import NotFoundPage from "./Pages/NotFoundPage";

import ProductPage from "./Pages/ProductPage";

import Collections from "./Pages/Collections";
import ProductsPage from "./Pages/ProductsPage";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<SignUp />} />

        <Route path="products" element={<ProductPage />} />

        <Route path="collections" element={<Collections />} />
        <Route path="products" element={<ProductsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
