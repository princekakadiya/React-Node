import React from "react";

const ContactUs = () => {
  return (
    <>
      <div>
        Contact US {/* Mobile Menu */}
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
      </div>
    </>
  );
};

export default ContactUs;
