import React from "react";
import MobileMenu from "../components/MobileMenu";

const ContactUs = () => {
  return (
    <>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      ></div>
      <div>
        Contact US
        <MobileMenu />
      </div>
    </>
  );
};

export default ContactUs;
