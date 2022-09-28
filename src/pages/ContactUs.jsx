import React, { useEffect } from "react";
import ContactDetail from "../components/ContactDetail";
import MobileMenu from "../components/MobileMenu";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      ></div>
      <div>
        <ContactDetail />
        <MobileMenu />
      </div>
    </>
  );
};

export default ContactUs;
