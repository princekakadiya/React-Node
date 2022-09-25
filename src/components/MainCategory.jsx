import React from "react";

const MainCategory = () => {
  return (
    <>
      <div className="container">
        <div className="banner-group">
          <div className="row">
            <div className="col-md-6">
              <div className="banner banner-border">
                <a href="/categorylist">
                  <img
                    src="assets/images/demos/demo-5/banners/banner-1.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <a href="/categorylist">
                    <h4 className="banner-subtitle">
                      <p>Trending now</p>
                    </h4>
                  </a>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">
                    <a href="/categorylist">
                      <span>
                        This Week's
                        <br />
                        Most Wanted
                      </span>
                    </a>
                  </h3>
                  {/* End .banner-title */}
                  <a
                    href="/categorylist"
                    className="btn btn-outline-primary-2 banner-link"
                  >
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-md-6*/}
            <div className="col-md-6">
              <div className="banner banner-border-hover">
                <a href="/categorylist">
                  <img
                    src="assets/images/demos/demo-5/banners/banner-2.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <h4 className="banner-subtitle">
                    <a href="/categorylist">Limited time only.</a>
                  </h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">
                    <a href="/categorylist">
                      <span>
                        Trainers &amp; Sportwear
                        <br />
                        Sale Up to 70% off
                      </span>
                    </a>
                  </h3>
                  {/* End .banner-title */}
                  <a
                    href="/categorylist"
                    className="btn btn-outline-primary-2 banner-link"
                  >
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
              <div className="banner banner-border-hover">
                <a href="/categorylist">
                  <img
                    src="assets/images/demos/demo-5/banners/banner-3.jpg"
                    alt="Banner"
                  />
                </a>
                <div className="banner-content">
                  <h4 className="banner-subtitle">
                    <a href="/categorylist">This week we love...</a>
                  </h4>
                  {/* End .banner-subtitle */}
                  <h3 className="banner-title">
                    <a href="/categorylist">
                      <span>
                        Womens <br />
                        Holiday Clothes
                      </span>
                    </a>
                  </h3>
                  {/* End .banner-title */}
                  <a
                    href="/categorylist"
                    className="btn btn-outline-primary-2 banner-link"
                  >
                    Discover Now
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                {/* End .banner-content */}
              </div>
              {/* End .banner */}
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .banner-group */}
      </div>
    </>
  );
};

export default MainCategory;
