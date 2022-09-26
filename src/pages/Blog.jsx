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
            <div className="row">
              <div className="col-lg-9">
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media">
                        <a href="single.html">
                          <img
                            src="assets/images/blog/listing/post-1.jpg"
                            alt="image desc"
                          />
                        </a>
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">John Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 22, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">2 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">Cras ornare tristique elit.</a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti. Sed egestas ...{" "}
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media entry-video">
                        <a href="single.html">
                          <img
                            src="assets/images/blog/listing/post-2.jpg"
                            alt="image desc"
                          />
                        </a>
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">John Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 20, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">3 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">
                            Facilisis aliquam porttitor mauris sit amet orci.
                          </a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Lifestyle</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Morbi purus libero, faucibus commodo quis, gravida
                            id, est. Vestibulum volutpat, lacus a ultrices
                            sagittis, mi neque euismod dui ...{" "}
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media">
                        <div
                          className="owl-carousel owl-simple owl-light owl-nav-inside"
                          data-toggle="owl"
                        >
                          <a href="single.html">
                            <img
                              src="assets/images/blog/listing/post-3.jpg"
                              alt="image desc"
                            />
                          </a>
                          <a href="single.html">
                            <img
                              src="assets/images/blog/listing/post-1.jpg"
                              alt="image desc"
                            />
                          </a>
                        </div>
                        {/* End .owl-carousel */}
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">John Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 17, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">0 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">Utaliquam sollicitudin leo.</a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Lifestyle</a>,<a href="#">Shopping</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti. Sed egestas ...{" "}
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media">
                        <a href="single.html">
                          <img
                            src="assets/images/blog/listing/post-4.jpg"
                            alt="image desc"
                          />
                        </a>
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">Jane Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 12, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">4 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">Fusce pellentesque suscipit.</a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Travel</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Praesent dapibus, neque id cursus faucibus, tortor
                            neque egestas auguae, eu vulputate magna eros eu
                            erat. Aliquam erat volutpat eget felis ...{" "}
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media">
                        <a href="single.html">
                          <img
                            src="assets/images/blog/listing/post-5.jpg"
                            alt="image desc"
                          />
                        </a>
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">John Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 11, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">0 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">
                            Donec nec justo eget felis facilisis fermentum.
                          </a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Hobbies</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                            accumsan porttitor, facilisis luctus, metus.
                            Phasellus ultrices nulla quis nibh. Quisque lectus.
                            Donec consectetuer ligula vulputate sem ...
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <article className="entry entry-list">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <figure className="entry-media">
                        <a href="single.html">
                          <img
                            src="assets/images/blog/listing/post-6.jpg"
                            alt="image desc"
                          />
                        </a>
                      </figure>
                      {/* End .entry-media */}
                    </div>
                    {/* End .col-md-5 */}
                    <div className="col-md-7">
                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <a href="#">Hans Doe</a>
                          </span>
                          <span className="meta-separator">|</span>
                          <a href="#">Nov 10, 2018</a>
                          <span className="meta-separator">|</span>
                          <a href="#">0 Comments</a>
                        </div>
                        {/* End .entry-meta */}
                        <h2 className="entry-title">
                          <a href="single.html">Quisque volutpat mattiseros.</a>
                        </h2>
                        {/* End .entry-title */}
                        <div className="entry-cats">
                          in <a href="#">Travel</a>,<a href="#">Hobbies</a>
                        </div>
                        {/* End .entry-cats */}
                        <div className="entry-content">
                          <p>
                            Nam dui mi, tincidunt quis, accumsan porttitor,
                            facilisis luctus, metus. Phasellus ultrices nulla
                            quis nibh. Quisque lectus. Donec consectetuer ...
                          </p>
                          <a href="single.html" className="read-more">
                            Continue Reading
                          </a>
                        </div>
                        {/* End .entry-content */}
                      </div>
                      {/* End .entry-body */}
                    </div>
                    {/* End .col-md-7 */}
                  </div>
                  {/* End .row */}
                </article>
                {/* End .entry */}
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a
                        className="page-link page-link-prev"
                        href="#"
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
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link page-link-next"
                        href="#"
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
              {/* End .col-lg-9 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </div>
    </>
  );
};

export default Blog;
