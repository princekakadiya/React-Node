import React, { useEffect } from "react";
import ContactDetail from "../components/ContactDetail";
import MobileMenu from "../components/MobileMenu";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <h1 className="page-title">Contact Us</h1>
          </div>
          {/* End .container */}
        </div>
        <ContactDetail />
      </div>
      <MobileMenu />
    </>
  );
};

export default ContactUs;
