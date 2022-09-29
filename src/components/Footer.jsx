import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer mt-5"
        style={{ backgroundImage: "url('assets/images/footer.jpg')" }}
      >
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div style={{ float: "left", width: "50%" }}>
                  <div>
                    <div className="widget widget-about">
                      <img
                        src="assets/images/demos/demo-5/logo-a-removebg-preview.png"
                        className="footer-logo"
                        alt=""
                        width={105}
                        height={25}
                      />
                      <div style={{ display: "flex" }}>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/4.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                44
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                55
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/5.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                128
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                99
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/6.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                433
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                25
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/7.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                588
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                44
                              </a>
                            </div>
                            {/* End .instagram-feed-content */}
                          </div>
                          {/* End .instagram-feed */}
                        </div>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/8.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                87
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                23
                              </a>
                            </div>
                            {/* End .instagram-feed-content */}
                          </div>
                          {/* End .instagram-feed */}
                        </div>
                        <div className="col-md-2">
                          <div className="instagram-feed">
                            <img
                              src="assets/images/demos/demo-5/instagram/9.jpg"
                              alt=""
                            />
                            <div className="instagram-feed-content">
                              <a href="/">
                                <i className="icon-heart-o" />
                                87
                              </a>
                              <a href="/">
                                <i className="icon-comments" />
                                23
                              </a>
                            </div>
                            {/* End .instagram-feed-content */}
                          </div>
                          {/* End .instagram-feed */}
                        </div>
                      </div>
                      {/* End .instagra-feed-container */}
                    </div>
                    {/* End .widget about-widget */}
                  </div>
                </div>
                <div
                  style={{
                    float: "right",
                    width: "50%",
                    textAlign: "center",
                    marginTop: "40px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      {/* Links */}
                      <h4 className="text-uppercase mb-4">Products</h4>
                      <p>
                        <a href="/">Angular</a>
                      </p>
                      <p>
                        <a href="/">React</a>
                      </p>
                      <p>
                        <a href="/">Vue</a>
                      </p>
                      <p>
                        <a href="/">Laravel</a>
                      </p>
                    </div>
                    <div>
                      {/* Links */}
                      <h4 className="text-uppercase  mb-4">Products</h4>
                      <p>
                        <a href="/">Angular</a>
                      </p>
                      <p>
                        <a href="/">React</a>
                      </p>
                      <p>
                        <a href="/">Vue</a>
                      </p>
                      <p>
                        <a href="/">Laravel</a>
                      </p>
                    </div>
                    <div>
                      {/* Links */}
                      <h4 className="text-uppercase  mb-4">Products</h4>
                      <p>
                        <a href="/">Angular</a>
                      </p>
                      <p>
                        <a href="/">React</a>
                      </p>
                      <p>
                        <a href="/">Vue</a>
                      </p>
                      <p>
                        <a href="/">Laravel</a>
                      </p>
                    </div>
                  </div>

                  {/* End .widget */}
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>

        {/* End .footer-middle */}
        <div className="footer-bottom ">
          <div className="container">
            <p className="footer-copyright ">
              Copyright © 2019 Arrayah Store. All Rights Reserved.
            </p>
            {/* End .footer-copyright */}
            <ul className="footer-menu">
              <li>
                <a href="/">Terms Of Use</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
            {/* End .footer-menu */}
            <div className="social-icons social-icons-color">
              <span className="social-label ">Social Media</span>
              <a
                href="/"
                className="social-icon social-facebook"
                title="Facebook"
                target="_blank"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="/"
                className="social-icon social-twitter"
                title="Twitter"
                target="_blank"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="/"
                className="social-icon social-instagram"
                title="Instagram"
                target="_blank"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="/"
                className="social-icon social-youtube"
                title="Youtube"
                target="_blank"
              >
                <i className="icon-youtube" />
              </a>
              <a
                href="/"
                className="social-icon social-pinterest"
                title="Pinterest"
                target="_blank"
              >
                <i className="icon-pinterest" />
              </a>
            </div>
            {/* End .soial-icons */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-bottom */}
      </footer>
    </>
  );
};

export default Footer;
