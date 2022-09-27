import React from "react";

const Brand = () => {
  return (
    <>
      <div
        className="brands-border owl-carousel owl-simple mb-5"
        data-toggle="owl"
        data-owl-options='{
              "nav": false, 
              "dots": false,
              "margin": 0,
              "loop": false,
              "responsive": {
                  "0": {
                      "items":2
                  },
                  "420": {
                      "items":3
                  },
                  "600": {
                      "items":4
                  },
                  "900": {
                      "items":5
                  },
                  "1024": {
                      "items":6
                  },
                  "1360": {
                      "items":7
                  }
              }
          }'
      >
        <a className="brand">
          <img src="assets/images/brands/1.png" />
        </a>
        <a className="brand">
          <img src="assets/images/brands/2.png" />
        </a>
        <a className="brand">
          <img src="assets/images/brands/3.png" />
        </a>
        <a className="brand">
          <img src="assets/images/brands/4.png" />
        </a>
        <a className="brand">
          <img src="assets/images/brands/5.png" />
        </a>
        <a className="brand">
          <img src="assets/images/brands/6.png" />
        </a>
        <a  className="brand">
          <img src="assets/images/brands/7.png" />
        </a>
      </div>
    </>
  );
};

export default Brand;
