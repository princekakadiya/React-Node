import React from "react";

const Header = () => {
  return (
    <>
      <header className="header header-5">
        <div className="header-middle sticky-header">
          <div className="container-fluid">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <a href="index.html" className="logo">
                <img
                  src="assets/images/demos/demo-5/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={25}
                />
              </a>
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="product.html">Product</a>
                  </li>
                  <li>
                    <a href="#" className="sf-with-ul">
                      Media
                    </a>
                    <ul>
                      <li>
                        <a href="#">Blogs</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
                {/* End .menu */}
              </nav>
              {/* End .main-nav */}
            </div>
            {/* End .header-left */}
            <div className="header-right">
              <div className="header-search header-search-extended header-search-visible">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search" />
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required=""
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search" />
                    </button>
                  </div>
                  {/* End .header-search-wrapper */}
                </form>
              </div>
              {/* End .header-search */}
              <a href="wishlist.html" className="wishlist-link">
                <i className="icon-heart-o" />
              </a>
            </div>
            {/* End .header-right */}
          </div>
          {/* End .container-fluid */}
        </div>
        {/* End .header-middle */}
      </header>

      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      {/* Mobile Menu */}
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
    </>
  );
};

export default Header;
