import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoryList from "./pages/CategoryList";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
