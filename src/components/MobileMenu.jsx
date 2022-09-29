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
            <i className="icon-bars" />
          </button>

          <span className="mobile-menu-close">
            <i className="icon-close" />
          </span>
          <nav className="mobile-nav mt-5">
            <ul className="mobile-menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categorylist">Product</Link>
              </li>
              <li>
                <Link to="" className="sf-with-ul">
                  Media
                </Link>
                <ul>
                  <li>
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
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
