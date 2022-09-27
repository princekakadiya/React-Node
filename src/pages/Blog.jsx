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
                      <img
                        src="assets/images/blog/listing/post-1.jpg"
                        alt="image desc"
                      />
                    </a>
                  </figure>
                  {/* End .entry-media */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-8">
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <a >John Doe</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a >Nov 22, 2018</a>
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
                      in <a >Lifestyle</a>,<a >Shopping</a>
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
                      <img
                        src="assets/images/blog/listing/post-2.jpg"
                        alt="image desc"
                      />
                    </a>
                  </figure>
                  {/* End .entry-media */}
                </div>
                {/* End .col-md-4 */}
                <div className="col-md-8">
                  <div className="entry-body">
                    <div className="entry-meta">
                      <span className="entry-author">
                        by <a >John Doe</a>
                      </span>
                      <span className="meta-separator">|</span>
                      <a >Nov 20, 2018</a>
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
                      in <a >Lifestyle</a>
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
    </>
  );
};

export default Blog;
