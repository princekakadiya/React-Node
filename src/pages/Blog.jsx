import React from "react";

const Blog = () => {
  return (
    <>
      <div className="page-wrapper">
        <div
          className="page-header text-center"
          style={{
            backgroundImage: 'url("assets/images/page-header-bg.jpg")',
          }}
        ></div>
        <div className="page-content">
          <div className="container">
            <article className="entry entry-list">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/blog/listing/post-1.jpg" alt="" />
                    </a>
                  </figure>
                  {/* End .entry-media */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-8">
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <a href="/">John Doe</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a href="/">Nov 22, 2018</a>
                      <span className="meta-separator">|</span>
                    </div>
                    {/* End .entry-meta */}
                    <h2 className="entry-title">
                      <a href="single.html" style={{ textDecoration: "none" }}>
                        Cras ornare tristique elit.
                      </a>
                    </h2>
                    {/* End .entry-title */}
                    <div className="entry-cats">
                      in <a href="/">Lifestyle</a>,<a href="/">Shopping</a>
                    </div>
                    {/* End .entry-cats */}
                    <div className="entry-content">
                      <p>
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor
                        libero sodales leo, eget blandit nunc tortor eu nibh.
                        Suspendisse potenti. Sed egestas ...{" "}
                      </p>
                      <a
                        href="single.html"
                        style={{ textDecoration: "none", color: "#408a55" }}
                        className="read-more"
                      >
                        Continue Reading
                      </a>
                    </div>
                    {/* End .entry-content */}
                  </div>
                  {/* End .entry-body */}
                </div>
                {/* End .col-md-8 */}
              </div>
              {/* End .row */}
            </article>
            {/* End .entry */}
            <article className="entry entry-list">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <figure className="entry-media entry-video">
                    <a href="single.html">
                      <img src="assets/images/blog/listing/post-2.jpg" alt="" />
                    </a>
                  </figure>
                  {/* End .entry-media */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-8">
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <a href="/">John Doe</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a href="/">Nov 20, 2018</a>
                      <span className="meta-separator">|</span>
                    </div>
                    {/* End .entry-meta */}
                    <h2 className="entry-title">
                      <a href="single.html" style={{ textDecoration: "none" }}>
                        Facilisis aliquam porttitor mauris sit amet orci.
                      </a>
                    </h2>
                    {/* End .entry-title */}
                    <div className="entry-cats">
                      in <a href="/">Lifestyle</a>
                    </div>
                    {/* End .entry-cats */}
                    <div className="entry-content">
                      <p>
                        Morbi purus libero, faucibus commodo quis, gravida id,
                        est. Vestibulum volutpat, lacus a ultrices sagittis, mi
                        neque euismod dui ...{" "}
                      </p>
                      <a
                        href="single.html"
                        style={{ textDecoration: "none", color: "#408a55" }}
                        className="read-more"
                      >
                        Continue Reading
                      </a>
                    </div>
                    {/* End .entry-content */}
                  </div>
                  {/* End .entry-body */}
                </div>
                {/* End .col-md-8 */}
              </div>
              {/* End .row */}
            </article>
            {/* End .entry */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </div>
      {/* Mobile Menu */}
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
    </>
  );
};

export default Blog;
