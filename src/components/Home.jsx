import React from "react";
import ContactUs from "./ContactUs";
import MainSlider from "./MainSlider";
import NewArrivals from "./NewArrivals";
import SpecialProduct from "./SpecialProduct";
import Testimonials from "./Testimonials";
import TrendingProduct from "./TrendingProduct";
import Video from "./Video";
import CategoryList from "../pages/CategoryList";
import MainCategory from "./MainCategory";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          {/* -----------------------------------------Main slider---------------------------------------  */}
          <MainSlider />
          {/* -------------------------------------Company of brand-------------------------------------- */}
          <div
            className="brands-border owl-carousel owl-simple mb-5"
            data-toggle="owl"
            data-owl-options='{
              "nav": false, 
              "dots": false,
              "margin": 0,
              "loop": false,
              "responsive": {
                  "0": {
                      "items":2
                  },
                  "420": {
                      "items":3
                  },
                  "600": {
                      "items":4
                  },
                  "900": {
                      "items":5
                  },
                  "1024": {
                      "items":6
                  },
                  "1360": {
                      "items":7
                  }
              }
          }'
          >
            <a href="#" className="brand">
              <img src="assets/images/brands/1.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/2.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/3.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/4.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/5.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/6.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/7.png" alt="Brand Name" />
            </a>
          </div>
          {/* ------------------------------ Main 3 product / Category ----------------------------------- */}
          <MainCategory />
          <div className="mb-4" />
          {/* -----------------------------------Trending products----------------------------------------- */}
          <TrendingProduct />
          <div className="mb-5" />
          {/* -----------------------------------------Youtube video---------------------------------------- */}
          <Video />
          {/* End .video-banner bg-image */}
          {/* -------------------------------Special product ----------------------------------------- */}
          <SpecialProduct />
          {/* End .bg-lighter pt6 pb-6 */}
          {/* -----------------------------------------New Arrivals----------------------------------- */}
          <NewArrivals />
          {/* End .container */}
          <div className="mb-2" />
          {/* End .mb-2 */}
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html">Shop</a>
                <ul>
                  <li>
                    <a href="category-list.html">Shop List</a>
                  </li>
                  <li>
                    <a href="category-2cols.html">Shop Grid 2 Columns</a>
                  </li>
                  <li>
                    <a href="category.html">Shop Grid 3 Columns</a>
                  </li>
                  <li>
                    <a href="category-4cols.html">Shop Grid 4 Columns</a>
                  </li>
                  <li>
                    <a href="category-boxed.html">
                      <span>
                        Shop Boxed No Sidebar
                        <span className="tip tip-hot">Hot</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="category-fullwidth.html">
                      Shop Fullwidth No Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="product-category-boxed.html">
                      Product Category Boxed
                    </a>
                  </li>
                  <li>
                    <a href="product-category-fullwidth.html">
                      <span>
                        Product Category Fullwidth
                        <span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Lookbook</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="product.html" className="sf-with-ul">
                  Product
                </a>
                <ul>
                  <li>
                    <a href="product.html">Default</a>
                  </li>
                  <li>
                    <a href="product-centered.html">Centered</a>
                  </li>
                  <li>
                    <a href="product-extended.html">
                      <span>
                        Extended Info<span className="tip tip-new">New</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="product-sticky.html">Sticky Info</a>
                  </li>
                  <li>
                    <a href="product-sidebar.html">Boxed With Sidebar</a>
                  </li>
                  <li>
                    <a href="product-fullwidth.html">Full Width</a>
                  </li>
                  <li>
                    <a href="product-masonry.html">Masonry Sticky Info</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                    <ul>
                      <li>
                        <a href="about.html">About 01</a>
                      </li>
                      <li>
                        <a href="about-2.html">About 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                    <ul>
                      <li>
                        <a href="contact.html">Contact 01</a>
                      </li>
                      <li>
                        <a href="contact-2.html">Contact 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs</a>
                  </li>
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Classic</a>
                  </li>
                  <li>
                    <a href="blog-listing.html">Listing</a>
                  </li>
                  <li>
                    <a href="#">Grid</a>
                    <ul>
                      <li>
                        <a href="blog-grid-2cols.html">Grid 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-3cols.html">Grid 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-4cols.html">Grid 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-sidebar.html">Grid sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Masonry</a>
                    <ul>
                      <li>
                        <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                      </li>
                      <li>
                        <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Mask</a>
                    <ul>
                      <li>
                        <a href="blog-mask-grid.html">Blog mask grid</a>
                      </li>
                      <li>
                        <a href="blog-mask-masonry.html">Blog mask masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Single Post</a>
                    <ul>
                      <li>
                        <a href="single.html">Default with sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                      </li>
                      <li>
                        <a href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="elements-list.html">Elements</a>
                <ul>
                  <li>
                    <a href="elements-products.html">Products</a>
                  </li>
                  <li>
                    <a href="elements-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements-titles.html">Titles</a>
                  </li>
                  <li>
                    <a href="elements-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="elements-product-category.html">
                      Product Category
                    </a>
                  </li>
                  <li>
                    <a href="elements-video-banners.html">Video Banners</a>
                  </li>
                  <li>
                    <a href="elements-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="elements-accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="elements-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="elements-testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="elements-blog-posts.html">Blog Posts</a>
                  </li>
                  <li>
                    <a href="elements-portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="elements-cta.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="elements-icon-boxes.html">Icon Boxes</a>
                  </li>
                </ul>
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
