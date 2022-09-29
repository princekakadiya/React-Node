import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header header-5">
        <div className="header-middle sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <a href="/" className="logo ml-5">
                <img
                  src="assets/images/demos/demo-5/logo-a-removebg-preview.png"
                  // src="src/components/logo.png"
                  alt=""
                  width={105}
                  height={25}
                />
              </a>
            </div>
            <div className="header-right mr-5">
              <nav className=" main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link
                      style={{ fontWeight: "0" }}
                      to="/categorylist"
                      className="sf-with-ul"
                    >
                      Product
                    </Link>
                    <ul>
                      <li>
                        <Link to="/productlist">Category-1</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-2</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-3</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-4</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-5</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-6</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-7</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-8</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="sf-with-ul">
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
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      <div className="mobile-menu-overlay" />
    </>
  );
};

export default Header;
