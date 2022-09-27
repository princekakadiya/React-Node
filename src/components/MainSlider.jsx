import React from "react";

const MainSlider = () => {
  return (
    <>
      <div className="intro-slider-container mb-0">
        <div
          className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
          data-toggle="owl"
          data-owl-options='{"dots": false}'
        >
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-5/slider/12.jpg)",
            }}
          >
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-success">Don’t Miss</h3>
              <h1 className="intro-title text-success">Mystery Deals</h1>
              <div className="intro-text text-success">Online Only</div>
              <a href="category.html" className="btn btn-success">
                Discover NOW
              </a>
            </div>
          </div>
          <div
            className="intro-slide"
            style={{
              backgroundImage:
                "url(assets/images/demos/demo-5/slider/11.jpg)",
            }}
          >
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-success">Limited time only</h3>
              <h1 className="intro-title text-success">Treat your self</h1>
              <div className="intro-text text-success">Up to 50% off</div>
              <a href="category.html" className="btn btn-success">
                Shop NOW
              </a>
            </div>
          </div>
        </div>
        <span className="slider-loader text-success" />
      </div>
    </>
  );
};

export default MainSlider;
