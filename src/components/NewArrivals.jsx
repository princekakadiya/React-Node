import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <>
      <div className="container pt-4 new-arrivals">
        <div className="heading heading-center mb-5">
          <h2 className="title" data-aos="fade-down">New Arrivals</h2>
          {/* End .title */}
        </div>
        {/* End .heading */}
        <div className="tab-content">
          <div
            className="tab-pane p-0 fade show active"
            id="new-all-tab"
            role="tabpanel"
            aria-labelledby="new-all-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
                      {/* End .product-action */}
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
                        <Link
                          to="productdetail"
                          style={{ textDecoration: "none" }}
                        >
                          Product category
                        </Link>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <Link
                          to="productdetail"
                          style={{ textDecoration: "none" }}
                        >
                          Product name
                        </Link>
                      </h3>
                      {/* End .product-title */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Sandals with lacing</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">Now $70.00</span>
                        <span className="old-price">Was $155.00</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/3.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Paper bag trousers</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$60.00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#9fac76" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/4.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Handbags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Paper straw shopper</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$398.00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/5.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Handbags</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Bucket bag</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$350.00</div>
                      {/* End .product-price */}
                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e3a84d" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#f48a5b" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                      {/* End .product-nav */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/6.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Silk-blend kaftan</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">Now $370.00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/7.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Linen-blend jumpsuit</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">$595.00</div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/8.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                      {/* End .product-action */}
                    </figure>
                    {/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>
                      {/* End .product-cat */}
                      <h3 className="product-title">
                        <a href="product.html">Sandals</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">Now $120.00</span>
                        <span className="old-price">Was $140.00</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                  </div>
                  {/* End .product */}
                </div>
                {/* End .col-sm-6 col-md-4 col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .products */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
        <div className="more-container text-center mt-1 mb-3">
          <Link
            to="productlist"
            className="btn btn-outline-primary-2 btn-round btn-more"
          >
            Load more
          </Link>
        </div>
        {/* End .more-container */}
      </div>
    </>
  );
};

export default NewArrivals;
