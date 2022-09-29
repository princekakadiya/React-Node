import React from "react";
import ContactDetail from "./ContactDetail";
import Counter from "./Counter";
import MainSlider from "./MainSlider";
import MobileMenu from "./MobileMenu";
import NewArrivals from "./NewArrivals";
import SmallIntro from "./SmallIntro";
import Speciality from "./Speciality";
import Testimonials from "./Testimonials";
import Video from "./Video";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              background: "#dcedc8",
            }}
          ></div>
          {/* ---------------Main slider------------  */}
          <MainSlider />
          {/* -----------Company of brand------------ */}
          {/* <Brand /> */}
          {/* ----------Company details-------------- */}
          <SmallIntro />
          <Speciality />
          {/* ---------Youtube video------------------ */}
          <Video />
          {/* ---------------New Arrivals------------- */}
          <NewArrivals />
          <Counter />
          {/* --------------Testimonials ------------- */}
          <Testimonials />
          {/* ------------------Contact Us------------ */}
          <ContactDetail />
        </main>
      </div>
      <MobileMenu />
    </>
  );
};

export default Home;
