import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div
          className="page-header text-center"
          style={{
            backgroundImage: 'url("assets/images/page-header-bg.jpg")',
          }}
        ></div>
        <main className="main">
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
              <h1 className="page-title">Gallery</h1>
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
      <MobileMenu />
    </>
  );
};

export default Gallery;
