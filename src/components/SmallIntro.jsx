import React from "react";

const SmallIntro = () => {
  return (
    <>
      <div className=" pt-6 pb-5 mb-6 mb-lg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-3 mb-lg-0">
              <h2 className="title">Who We Are</h2>
              {/* End .title */}
              <p className=" text-primary ">
                Pellentesque odio nisi, euismod pharetra a ultricies <br />
                in diam. Sed arcu. Cras consequat
              </p>
              {/* End .lead text-primary */}
              <p className="mb-2">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Suspendisse
                potenti. Sed egestas, ante et vulputate volutpat, uctus metus
                libero eu augue.{" "}
              </p>
              <a href="aboutus" className="btn btn-outline-primary-2">
                <span>About US</span>
                <i className="icon-long-arrow-right" />
              </a>
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
      {/* End .bg-light-2 pt-6 pb-6 */}
    </>
  );
};

export default SmallIntro;
