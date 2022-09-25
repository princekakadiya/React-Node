import React from "react";
import Brand from "./Brand";
import ContactUs from "./ContactUs";
import MainSlider from "./MainSlider";
import NewArrivals from "./NewArrivals";
import Testimonials from "./Testimonials";
import Video from "./Video";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          {/* -----------------------------------------Main slider---------------------------------------  */}
          <MainSlider />
          {/* -------------------------------------Company of brand-------------------------------------- */}
          <Brand />
          {/* -----------------------------------------New Arrivals----------------------------------- */}
          <NewArrivals />
          {/* End .container */}
          <div className="mb-2" />
          {/* End .mb-2 */}
          {/* -----------------------------------------Youtube video---------------------------------------- */}
          <Video />
          {/* End .video-banner bg-image */}
          {/* -------------------------------------------Instagram last posts -------------------------- */}
          <div
            className="bg-lighter pt-7 pb-4"
            style={{ backgroundColor: "#fafafa" }}
          >
            <div className="container">
              <div className="instagram-feed-container">
                <div className="row">
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/1.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          387
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          45
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/2.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          691
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          87
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col feed-col-title">
                    <div className="instagram-feed-title">
                      <i className="icon-instagram" />
                      <p>
                        @Molla_store <br />
                        on instagram
                      </p>
                      <a href="#">FOLLOW</a>
                    </div>
                    {/* End .instagram-feed-title */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/3.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          321
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          54
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/4.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          44
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          55
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/5.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          128
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          99
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/6.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          433
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          25
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/7.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          588
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          44
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/8.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          87
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          23
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                  <div className="feed-col">
                    <div className="instagram-feed">
                      <img
                        src="assets/images/demos/demo-5/instagram/9.jpg"
                        alt="img"
                      />
                      <div className="instagram-feed-content">
                        <a href="#">
                          <i className="icon-heart-o" />
                          87
                        </a>
                        <a href="#">
                          <i className="icon-comments" />
                          23
                        </a>
                      </div>
                      {/* End .instagram-feed-content */}
                    </div>
                    {/* End .instagram-feed */}
                  </div>
                  {/* End .feed-col */}
                </div>
                {/* End .row */}
              </div>
              {/* End .instagra-feed-container */}
            </div>
            {/* End .container */}
          </div>
          {/* End .bg-lighter pt-5 pb-5 */}
          {/* -----------------------------------------Testimonials ----------------------------------- */}
          <Testimonials />
          {/* ----------------------------Contact Us------------------------------------------------ */}
          <ContactUs />
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
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required=""
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search" />
            </button>
          </form>
          <nav className="mobile-nav">
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
