import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <header className="header header-5">
        <div className="header-middle sticky-header">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars" />
              </button>
              <a href="/" className="logo ml-5">
                <img
                  src="assets/images/demos/demo-5/logo-a-removebg-preview.png"
                  // src="src/components/logo.png"
                  alt=""
                  width={105}
                  height={25}
                />
              </a>
            </div>
            <div className="header-right mr-5">
              <nav className=" main-nav">
                <ul className="menu sf-arrows">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link
                      style={{ fontWeight: "0" }}
                      to="/categorylist"
                      className="sf-with-ul"
                    >
                      Product
                    </Link>
                    <ul>
                      <li>
                        <Link to="/productlist">Category-1</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-2</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-3</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-4</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-5</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-6</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-7</Link>
                      </li>
                      <li>
                        <Link to="/productlist">Category-8</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" className="sf-with-ul">
                      Media
                    </a>
                    <ul>
                      <li>
                        <Link to="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link to="gallery">Gallery</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header> */}

      <header>
        <nav
          className="navbar navbar-navs navbar-expend navbar-expand-md fixed-top"
          id="menu-top"
          style={{ background: "#dcedc8" }}
        >
          <div className="container">
            <a href="/" className="navbar-brand">
              <img
                src="assets/images/demos/demo-5/logo-a-removebg-preview.png"
                alt=""
                width={105}
                height={25}
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="menu-nav">
                  <a
                    style={{
                      color: "#52a933",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link page-scroll active"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li className="menu-nav dropdown">
                  <a
                    style={{
                      color: "#52a933",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link dropdown-toggle page-scroll"
                    href="/"
                    data-toggle="dropdown"
                  >
                    Product
                  </a>

                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "#52a933" }}
                  >
                    <li className="menu-nav">
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 1
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 2
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 3
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 4
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 5
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 6
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 7
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 8
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-nav dropdown">
                  <a
                    style={{
                      color: "#52a933",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link dropdown-toggle page-scroll"
                    href="/"
                    data-toggle="dropdown"
                  >
                    Media
                  </a>

                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "#52a933" }}
                  >
                    <li className="menu-nav">
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/blog"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Blog
                      </a>
                      <a
                        className="nav-link dropdoen-item page-scroll"
                        href="/gallery"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Gallery
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-nav">
                  <a
                    style={{
                      color: "#52a933",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link page-scroll"
                    href="/contactus"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/*- END CONTAINER */}
        </nav>
      </header>

      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      <div className="mobile-menu-overlay" />
    </>
  );
};

export default Header;
