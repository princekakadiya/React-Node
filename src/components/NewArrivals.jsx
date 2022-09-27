import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <>
      <div className="container pt-6 pb-5 new-arrivals">
        <div className="heading heading-center mb-5">
          <h2 className="title">New Arrivals</h2>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/3.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/4.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/5.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/6.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/7.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
                      <Link to="/productdetail">
                        <img
                          src="assets/images/demos/demo-5/products/8.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </Link>
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
            <button type="button" class="btn btn-lg btn-outline-success">
              Load More
              <i className="icon-long-arrow-right" />
            </button>
          </Link>
        </div>
        {/* End .more-container */}
      </div>
    </>
  );
};

export default NewArrivals;
