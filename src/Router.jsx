import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./pages/AboutUs";
import CategoryList from "./pages/CategoryList";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";

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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
