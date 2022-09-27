import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
      <main className="main">
        <div
          className="page-header text-center mb-5"
          style={{
            backgroundImage: 'url("assets/images/page-header-bg.jpg")',
          }}
        >
          {/* End .container */}
        </div>
        {/* End .page-header */}
        <div className="page-content">
          <div className="container">
            <div className="product-details-top">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <figure className="product-main-image">
                      <img
                        id="product-zoom"
                        src="assets/images/products/single/1.jpg"
                        data-zoom-image="assets/images/products/single/1-big.jpg"
                        alt=""
                      />
                    </figure>
                    {/* End .product-main-image */}
                  </div>
                  {/* End .row */}
                  {/* End .product-gallery */}
                </div>
                {/* End .col-md-6 */}
                <div className="col-md-6">
                  <div className="product-details">
                    <h1 className="product-title">
                      Dark yellow lace cut out swing dress
                    </h1>
                    {/* End .product-title */}
                    <div className="ratings-container">
                      <div className="ratings">
                        <div className="ratings-val" style={{ width: "80%" }} />
                        {/* End .ratings-val */}
                      </div>
                      {/* End .ratings */}
                      <a className="ratings-text" href="/" id="review-link">
                        ( 2 Reviews )
                      </a>
                    </div>
                    {/* End .rating-container */}
                    <div className="product-price">$84.00</div>
                    {/* End .product-price */}
                    <div className="product-content">
                      <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Morbi
                        purus libero, faucibus adipiscing. Sed lectus.{" "}
                      </p>
                    </div>
                    {/* End .product-content */}

                    <div className="product-details-footer">
                      <div className="product-cat">
                        <span>Category:</span>
                        <a href="productdetail">Women</a>
                      </div>
                      {/* End .product-cat */}
                      <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <a
                          href="https://www.facebook.com/"
                          className="social-icon"
                          title="Facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-facebook-f" />
                        </a>
                        <a
                          href="https://www.twitter.com/"
                          className="social-icon"
                          title="Twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-twitter" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          className="social-icon"
                          title="Instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-instagram" />
                        </a>
                        <a
                          href="https://www.pinterest.com/"
                          className="social-icon"
                          title="Pinterest"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="icon-pinterest" />
                        </a>
                      </div>
                    </div>
                    {/* End .product-details-footer */}
                  </div>
                  {/* End .product-details */}
                </div>
                {/* End .col-md-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .product-details-top */}
            <div className="product-details-tab">
              <ul
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="product-desc-link"
                    data-toggle="tab"
                    href="/"
                    role="tab"
                    aria-controls="product-desc-tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-info-link"
                    data-toggle="tab"
                    href="/"
                    role="tab"
                    aria-controls="product-info-tab"
                    aria-selected="false"
                  >
                    Additional information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-shipping-link"
                    data-toggle="tab"
                    href="/"
                    role="tab"
                    aria-controls="product-shipping-tab"
                    aria-selected="false"
                  >
                    Shipping &amp; Returns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-review-link"
                    data-toggle="tab"
                    href="/"
                    role="tab"
                    aria-controls="product-review-tab"
                    aria-selected="false"
                  >
                    Reviews (2)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="product-desc-tab"
                  role="tabpanel"
                  aria-labelledby="product-desc-link"
                >
                  <div className="product-desc-content">
                    <h3>Product Information</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna viverra non, semper
                      suscipit, posuere a, pede. Donec nec justo eget felis
                      facilisis fermentum. Aliquam porttitor mauris sit amet
                      orci. Aenean dignissim pellentesque felis. Phasellus
                      ultrices nulla quis nibh. Quisque a lectus. Donec
                      consectetuer ligula vulputate sem tristique cursus.{" "}
                    </p>
                    <ul>
                      <li>
                        Nunc nec porttitor turpis. In eu risus enim. In vitae
                        mollis elit.{" "}
                      </li>
                      <li>Vivamus finibus vel mauris ut vehicula.</li>
                      <li>
                        Nullam a magna porttitor, dictum risus nec, faucibus
                        sapien.
                      </li>
                    </ul>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna viverra non, semper
                      suscipit, posuere a, pede. Donec nec justo eget felis
                      facilisis fermentum. Aliquam porttitor mauris sit amet
                      orci. Aenean dignissim pellentesque felis. Phasellus
                      ultrices nulla quis nibh. Quisque a lectus. Donec
                      consectetuer ligula vulputate sem tristique cursus.{" "}
                    </p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-info-tab"
                  role="tabpanel"
                  aria-labelledby="product-info-link"
                >
                  <div className="product-desc-content">
                    <h3>Information</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                      erat ut turpis. Suspendisse urna viverra non, semper
                      suscipit, posuere a, pede. Donec nec justo eget felis
                      facilisis fermentum. Aliquam porttitor mauris sit amet
                      orci.{" "}
                    </p>
                    <h3>Fabric &amp; care</h3>
                    <ul>
                      <li>Faux suede fabric</li>
                      <li>Gold tone metal hoop handles.</li>
                      <li>RI branding</li>
                      <li>Snake print trim interior </li>
                      <li>Adjustable cross body strap</li>
                      <li>
                        {" "}
                        Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop:
                        61cm
                      </li>
                    </ul>
                    <h3>Size</h3>
                    <p>one size</p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-shipping-tab"
                  role="tabpanel"
                  aria-labelledby="product-shipping-link"
                >
                  <div className="product-desc-content">
                    <h3>Delivery &amp; returns</h3>
                    <p>
                      We deliver to over 100 countries around the world. For
                      full details of the delivery options we offer, please view
                      our <a href="/">Delivery information</a>
                      <br />
                      We hope you’ll love every purchase, but if you ever need
                      to return an item you can do so within a month of receipt.
                      For full details of how to make a return, please view our{" "}
                      <a href="/">Returns information</a>
                    </p>
                  </div>
                  {/* End .product-desc-content */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-review-tab"
                  role="tabpanel"
                  aria-labelledby="product-review-link"
                >
                  <div className="reviews">
                    <h3>Reviews (2)</h3>
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="/">Samanta J.</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "80%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                          </div>
                          {/* End .rating-container */}
                          <span className="review-date">6 days ago</span>
                        </div>
                        {/* End .col */}
                        <div className="col">
                          <h4>Good, perfect size</h4>
                          <div className="review-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Ducimus cum dolores assumenda
                              asperiores facilis porro reprehenderit animi culpa
                              atque blanditiis commodi perspiciatis doloremque,
                              possimus, explicabo, autem fugit beatae quae
                              voluptas!
                            </p>
                          </div>
                          {/* End .review-content */}
                          <div className="review-action">
                            <a href="/">
                              <i className="icon-thumbs-up" />
                              Helpful (2)
                            </a>
                            <a href="/">
                              <i className="icon-thumbs-down" />
                              Unhelpful (0)
                            </a>
                          </div>
                          {/* End .review-action */}
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .review */}
                    <div className="review">
                      <div className="row no-gutters">
                        <div className="col-auto">
                          <h4>
                            <a href="/">John Doe</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                          </div>
                          {/* End .rating-container */}
                          <span className="review-date">5 days ago</span>
                        </div>
                        {/* End .col */}
                        <div className="col">
                          <h4>Very good</h4>
                          <div className="review-content">
                            <p>
                              Sed, molestias, tempore? Ex dolor esse iure hic
                              veniam laborum blanditiis laudantium iste amet.
                              Cum non voluptate eos enim, ab cumque nam, modi,
                              quas iure illum repellendus, blanditiis
                              perspiciatis beatae!
                            </p>
                          </div>
                          {/* End .review-content */}
                          <div className="review-action">
                            <a href="/">
                              <i className="icon-thumbs-up" />
                              Helpful (0)
                            </a>
                            <a href="/">
                              <i className="icon-thumbs-down" />
                              Unhelpful (0)
                            </a>
                          </div>
                          {/* End .review-action */}
                        </div>
                        {/* End .col-auto */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .review */}
                  </div>
                  {/* End .reviews */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .product-details-tab */}
            <h2 className="title text-center mb-4">You May Also Like</h2>
            {/* End .title text-center */}
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                      "nav": false, 
                      "dots": true,
                      "margin": 20,
                      "loop": false,
                      "responsive": {
                          "0": {
                              "items":1
                          },
                          "480": {
                              "items":2
                          },
                          "768": {
                              "items":3
                          },
                          "992": {
                              "items":4
                          },
                          "1200": {
                              "items":4,
                              "nav": true,
                              "dots": false
                          }
                      }
                  }'
            >
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt=""
                      className="product-image"
                    />
                  </a>
                  <div className="product-action product-action-transparent">
                    <Link
                      to="/inquiry"
                      className="btn-product"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#408a55",
                      }}
                    >
                      <span>Send inquiry</span>
                    </Link>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/">Women</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Brown paperbag waist <br />
                      pencil skirt
                    </a>
                  </h3>
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-out">Out of Stock</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-6.jpg"
                      alt=""
                      className="product-image"
                    />
                  </a>
                  <div className="product-action product-action-transparent">
                    <Link
                      to="/inquiry"
                      className="btn-product"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#408a55",
                      }}
                    >
                      <span>Send inquiry</span>
                    </Link>
                  </div>
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/">Jackets</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Khaki utility boiler jumpsuit</a>
                  </h3>
                  {/* End .product-title */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-11.jpg"
                      alt=""
                      className="product-image"
                    />
                  </a>
                  <div className="product-action product-action-transparent">
                    <Link
                      to="/inquiry"
                      className="btn-product"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#408a55",
                      }}
                    >
                      <span>Send inquiry</span>
                    </Link>
                  </div>
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/">Shoes</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Light brown studded Wide fit wedges
                    </a>
                  </h3>
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-10.jpg"
                      alt=""
                      className="product-image"
                    />
                  </a>
                  <div className="product-action product-action-transparent">
                    <Link
                      to="/inquiry"
                      className="btn-product"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#408a55",
                      }}
                    >
                      <span>Send inquiry</span>
                    </Link>
                  </div>
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/">Jumpers</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Yellow button front tea top</a>
                  </h3>
                  {/* End .product-title */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-7 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-7.jpg"
                      alt=""
                      className="product-image"
                    />
                  </a>
                  <div className="product-action product-action-transparent">
                    <Link
                      to="/inquiry"
                      className="btn-product"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#408a55",
                      }}
                    >
                      <span>Send inquiry</span>
                    </Link>
                  </div>
                </figure>
                {/* End .product-media */}
                <div className="product-body">
                  <div className="product-cat">
                    <a href="/">Jeans</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Blue utility pinafore denim dress</a>
                  </h3>
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </main>
      {/* End .main */}
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
              href="https://www.facebook.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className="icon-facebook-f" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <i className="icon-twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="icon-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
              title="Youtube"
            >
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

export default ProductDetail;
