import React from "react";
import MobileMenu from "../components/MobileMenu";

const AboutUs = () => {
  return (
    <>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      ></div>

<div className="bg-light-2 pt-6 pb-7 mb-6">
        <div className="container">
          <h2 className="title text-center mb-5" data-aos="fade-down">Certification and Accerditation</h2>
          {/* End .title text-center mb-2 */} 
          <div className="row">
            <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
          <center><h2 className="title text-center text-success mb-4 w-75">Certification 1</h2></center>
              <div className="member member-2 text-center">
                <figure className="member-media">
                  <img src="assets/images/team/about-2/1.jpeg" alt="" />
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>

            <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
          <center><h2 className="title text-center text-success mb-4 w-75">Certification 2</h2></center>
              <div className="member member-2 text-center">
                <figure className="member-media">
                  <img src="assets/images/team/about-2/2.jpeg" alt="" />
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>

            <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
          <center><h2 className="title text-center text-success mb-4 w-75">Certification 3</h2></center>
              <div className="member member-2 text-center">
                <figure className="member-media">
                  <img src="assets/images/team/about-2/3.jpeg" alt="" />
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>

            <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
          <center><h2 className="title text-center text-success mb-4 w-75">Certification 4</h2></center>
              <div className="member member-2 text-center">
                <figure className="member-media">
                  <img src="assets/images/team/about-2/4.jpeg" alt="" />
                  {/* End .member-overlay */}
                </figure>
                {/* End .member-media */}
                {/* End .member-content */}
              </div>
              {/* End .member */}
            </div>
            {/* End .col-lg-3 */}

            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
          <div className="text-center mt-3">
            <button type="button" class="btn btn-lg btn-outline-success">
              LETS START WORK
              <i className="icon-long-arrow-right" />
            </button>
          </div>
          {/* End .text-center */}
        </div>
        {/* End .container */}
      </div>

      {/* End .bg-light-2 pt-6 pb-6 */}
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="brands-text text-center mx-auto mb-6">
              <h2 className="title">
                The world's premium medical brands in one destination.
              </h2>
              {/* End .title */}
              <p>
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nis
              </p>
            </div>
            {/* End .brands-text */}
            <div className="brands-display">
              <div className="row justify-content-center">
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/1.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/2.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/3.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/7.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/4.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/5.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/6.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
                <div className="col-6 col-sm-4 col-md-3">
                  <a href="/" className="brand">
                    <img src="assets/images/brands/9.png" alt="" />
                  </a>
                </div>
                {/* End .col-md-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .brands-display */}
          </div>
          {/* End .col-lg-10 offset-lg-1 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}

      <MobileMenu />
    </>
  );
};

export default AboutUs;
