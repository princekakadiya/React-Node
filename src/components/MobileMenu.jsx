import React from "react";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu-overlay" />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <button className="mobile-menu-toggler">
            <span className="sr-only">Toggle mobile menu</span>
          </button>

          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <nav className="mobile-nav mt-5">
            <ul className="mobile-menu">
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
    </>
  );
};

export default MobileMenu;
