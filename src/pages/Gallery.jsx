import React, { useEffect } from "react";
import MobileMenu from "../components/MobileMenu";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="page-wrapper">
        <div
          className="page-header text-center"
          style={{
            backgroundImage: 'url("assets/images/page-header-bg.jpg")',
          }}
        ></div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="entry-container max-col-4">
            <div className="entry-item lifestyle shopping col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-1.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item lifestyle col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-2.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item fashion lifestyle col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <div
                    className="owl-carousel owl-simple owl-light owl-nav-inside"
                    data-toggle="owl"
                  >
                    <a href="single.html">
                      <img
                        src="assets/images/blog/masonry/4cols/post-3.jpg"
                        alt=""
                      />
                    </a>
                    <a href="single.html">
                      <img
                        src="assets/images/blog/masonry/4cols/post-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* End .owl-carousel */}
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-4.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel hobbies col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media entry-video">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-5.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item hobbies col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-6.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-7.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <div
                    className="owl-carousel owl-simple owl-light owl-nav-inside"
                    data-toggle="owl"
                  >
                    <a href="single.html">
                      <img
                        src="assets/images/blog/masonry/4cols/post-8.jpg"
                        alt=""
                      />
                    </a>
                    <a href="single.html">
                      <img
                        src="assets/images/blog/masonry/4cols/post-8-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  {/* End .owl-carousel */}
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-9.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-10.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-11.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
            <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
              <article className="entry entry-grid text-center">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/blog/masonry/4cols/post-12.jpg"
                      alt=""
                    />
                  </a>
                </figure>
                {/* End .entry-media */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .entry-item */}
          </div>
          {/* End .entry-container */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a
                  className="page-link page-link-prev"
                  href="/"
                  aria-label="Previous"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-left" />
                  </span>
                  Prev
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="/">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/">
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link page-link-next"
                  href="/"
                  aria-label="Next"
                >
                  Next{" "}
                  <span aria-hidden="true">
                    <i className="icon-long-arrow-right" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* End .container */}
      </div>
      <MobileMenu />
    </>
  );
};

export default Gallery;
