import React from "react";
import Brand from "./Brand";
import ContactDetail from "./ContactDetail";
import Counter from "./Counter";
import InstaPost from "./InstaPost";
import MainSlider from "./MainSlider";
import NewArrivals from "./NewArrivals";
import SmallIntro from "./SmallIntro";
import Speciality from "./Speciality";
import Testimonials from "./Testimonials";
import Video from "./Video";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              background: "#dcedc8",
            }}
          >
            {/* End .container */}
          </div>
          {/* ---------------Main slider------------  */}
          <MainSlider />
          {/* -----------Company of brand------------ */}
          <Brand />
          {/* ----------Company details-------------- */}
          <SmallIntro />
          <Speciality />
          {/* End .container */}
          {/* ---------Youtube video------------------ */}
          <Video />
          {/* ---------------New Arrivals------------- */}
          <NewArrivals />
          <div className="mb-2" />
          {/* End .mb-2 */}
          <Counter />
          {/* ---------------Instagram last posts ---- */}
          <InstaPost />
          {/* --------------Testimonials ------------- */}
          <Testimonials />
          {/* ------------------Contact Us------------ */}
          <ContactDetail />
        </main>
        {/* End .main */}
      </div>
      {/* End .page-wrapper */}
      {/* Mobile Menu */}
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <nav className="mobile-nav mt-5">
            <ul className="mobile-menu">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="productlist">Product</a>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Media
                </a>
                <ul>
                  <li>
                    <a href="blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="gallery">Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="aboutus">About Us</a>
              </li>
              <li>
                <a href="contactus">Contact Us</a>
              </li>
            </ul>
          </nav>
          {/* End .mobile-nav */}
          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter" />
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a href="#" className="social-icon" target="_blank" title="Youtube">
              <i className="icon-youtube" />
            </a>
          </div>
          {/* End .social-icons */}
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
    </>
  );
};

export default Home;
