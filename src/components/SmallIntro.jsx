import React from "react";
import { Link } from "react-router-dom";

const SmallIntro = () => {
  return (
    <>
      <div className="pt-6 pb-5 mb-6 mb-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <h1 className="display-1 ml-5">
                <strong>Who We Are</strong>
              </h1>
              {/* End .title */}
              <p className=" mt-5 ml-5" style={{ color: "#408a55" }}>
                Pellentesque odio nisi, euismod pharetra a ultricies <br />
                in diam. Sed arcu. Cras consequat dssd phratcture ultiordh ghjty
              </p>
              {/* End .lead text-primary */}
              <p className="mt-5 ml-5">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Suspendisse
                potenti. Sed egestas, ante et vulputate volutpat, uctus metus
                libero eu augue.{" "}
              </p>
              <div className="ml-5 mt-5 col-5">
                <button type="button" class="btn btn-lg btn-outline-success">
                  About US
                  <i className="icon-long-arrow-right" />
                </button>
              </div>
            </div>
            {/* End .col-lg-5 */}
            <div className="col-lg-6 offset-lg-1">
              <div className="about-images">
                <img
                  src="assets/images/about/img-1.jpg"
                  alt=""
                  className="about-img-front"
                />
                <img
                  src="assets/images/about/img-2.jpg"
                  alt=""
                  className="about-img-back"
                />
              </div>
              {/* End .about-images */}
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default SmallIntro;
