import React, { useEffect } from "react";
import MobileMenu from "../components/MobileMenu";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("");

  return (
    <>
      <div>
        <div
          className="page-header text-center"
          style={{
            backgroundImage: 'url("assets/images/page-header-bg.jpg")',
          }}
        ></div>
        <nav
          aria-label="breadcrumb"
          className="breadcrumb-nav breadcrumb-with-filter"
        ></nav>
        <div
          className="page-header text-center mb-5"
          style={{
            backgroundImage: 'url("assets/images/page-header-green.jpg")',
          }}
        >
          <div className="container">
            <h1 className="page-title">About Us</h1>
          </div>
          {/* End .container */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2 className="title">Our Vision</h2>
              {/* End .title */}
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
            <div className="col-lg-6">
              <h2 className="title">Our Mission</h2>
              {/* End .title */}
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. <br />
                Praesent elementum hendrerit tortor. Sed semper lorem at felis.{" "}
              </p>
            </div>
            {/* End .col-lg-6 */}
          </div>
          {/* End .row */}
          <div className="mb-5" />
          {/* End .mb-4 */}
        </div>

        <div className="bg-light-2 pt-6 pb-7 mb-6">
          <div className="container">
            <h2 className="title text-center mb-5">Meet Our Team</h2>
            {/* End .title text-center mb-2 */}
            <div className="row">
              <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
                <center><h2 className="title text-center text-success mb-4 w-75" >Certificate 1</h2></center>
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
              {/* End .col-lg-3 */}
              <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
                <center><h2 className="title text-center text-success mb-4 w-75" >Certificate 1</h2></center>
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
              {/* End .col-lg-3 */}
              <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
                <center><h2 className="title text-center text-success mb-4 w-75" >Certificate 1</h2></center>
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
              {/* End .col-lg-3 */}
              <div className="col-sm-6 col-lg-3" data-aos="zoom-in">
                <center><h2 className="title text-center text-success mb-4 w-75" >Certificate 1</h2></center>
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
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nis
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
      </div>
      <MobileMenu />
    </>
  );
};

export default AboutUs;
