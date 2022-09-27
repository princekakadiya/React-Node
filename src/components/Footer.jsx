import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                <div className="widget widget-about">
                  <img
                    src="assets/images/demos/demo-5/logo-a.png"
                    className="footer-logo"
                    alt="Footer Logo"
                    width={105}
                    height={25}
                  />
                  <div className="instagram-feed-container">
                    <div className="row">
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/4.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              44
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              55
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/5.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              128
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              99
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/6.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              433
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              25
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                    </div>
                    {/* End .row */}
                    <div className="row">
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/7.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              588
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              44
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/8.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              87
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              23
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                      <div className="feed-col col-md-3 col-sm-3">
                        <div className="instagram-feed">
                          <img
                            src="assets/images/demos/demo-5/instagram/9.jpg"
                            alt="img"
                          />
                          <div className="instagram-feed-content">
                            <a href="#">
                              <i className="icon-heart-o" />
                              87
                            </a>
                            <a href="#">
                              <i className="icon-comments" />
                              23
                            </a>
                          </div>
                          {/* End .instagram-feed-content */}
                        </div>
                        {/* End .instagram-feed */}
                      </div>
                      {/* End .feed-col */}
                    </div>
                  </div>
                  {/* End .instagra-feed-container */}
                </div>
                {/* End .widget about-widget */}
              </div>
              {/* End .col-sm-12 col-lg-3 */}
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div className="widget">
                  <Link to="productlist">
                    <h4 className="widget-title">Product</h4>
                  </Link>
                  <a href="productlist">
                    <h4 className="widget-title">About Us</h4>
                  </a>
                  <a href="productlist">
                    <h4 className="widget-title">Contact Us</h4>
                  </a>
                  <div className="widget-about-info">
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <span className="widget-about-title">
                          Got Question? Call us 24/7
                        </span>
                        <a href="tel:123456789">+0123 456 789</a>
                      </div>
                      {/* End .col-sm-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .col-sm-4 col-lg-3 */}
              <div className="col-sm-2 col-md-2 col-lg-2">
                <div className="widget">
                  <h4 className="widget-title">Media</h4>
                  {/* End .widget-title */}
                  <ul className="widget-list">
                    <li>
                      <a href="blog">Blog</a>
                    </li>
                    <li>
                      <a href="gallery">Gallery</a>
                    </li>
                  </ul>
                  {/* End .widget-list */}
                </div>
              </div>
              {/* End .col-sm-4 col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>

        {/* End .footer-middle */}
        <div className="footer-bottom ">
          <div className="container">
            <p className="footer-copyright">
              Copyright © 2019 Molla Store. All Rights Reserved.
            </p>
            {/* End .footer-copyright */}
            <ul className="footer-menu">
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            {/* End .footer-menu */}
            <div className="social-icons social-icons-color">
              <span className="social-label">Social Media</span>
              <a
                href="#"
                className="social-icon social-facebook"
                title="Facebook"
                target="_blank"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon social-twitter"
                title="Twitter"
                target="_blank"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon social-instagram"
                title="Instagram"
                target="_blank"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon social-youtube"
                title="Youtube"
                target="_blank"
              >
                <i className="icon-youtube" />
              </a>
              <a
                href="#"
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
