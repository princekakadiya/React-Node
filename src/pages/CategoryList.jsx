import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

const CategoryList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className="page-wrapeer">
          <main className="main">
            <div
              className="page-header text-center"
              style={{
                backgroundImage: 'url("assets/images/page-header-bg.jpg")',
              }}
            ></div>
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav breadcrumb-with-filter"
            ></nav>
            <div
              className="page-header text-center mb-5"
              style={{
                backgroundImage: 'url("assets/images/page-header-green.jpg")',
              }}
            >
              <div className="container">
                <h1 className="page-title">Category List</h1>
              </div>
              {/* End .container */}
            </div>
            <div className="page-content">
              <div className="categories-page">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/1.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">2 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/2.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">3 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/3.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">0 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/4.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">4 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/5.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">20 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/6.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">2 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/7.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">12 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="banner banner-cat banner-badge">
                        <Link to="/productlist">
                          <img
                            src="assets/images/demos/demo-5/products/8.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="banner-link">
                          <h3 className="banner-title">Category name</h3>
                          {/* End .banner-title */}
                          <h4 className="banner-subtitle">8 Products</h4>
                          {/* End .banner-subtitle */}
                          <Link className="banner-link-text" to="productlist">
                            See Alls
                          </Link>
                        </span>
                        {/* End .banner-link */}
                      </div>
                      {/* End .banner */}
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .container-fluid */}
              </div>
              {/* End .categories-page */}
            </div>
            {/* End .page-content */}
          </main>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default CategoryList;
