import React from "react";
import { Link } from "react-router-dom";

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
              <a href="/" className="logo">
                <img
                  src="assets/images/demos/demo-5/logo-a.png"
                  // src="src/components/logo.png"
                  alt="Molla Logo"
                  width={105}
                  height={25}
                />
              </a>
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <Link to="/categorylist">Product</Link>
                  </li>
                  <li>
                    <a href="" className="sf-with-ul">
                      Media
                    </a>
                    <ul>
                      <li>
                        <Link to="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link to="gallery">Gallery</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contactus">Contact Us</Link>
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
