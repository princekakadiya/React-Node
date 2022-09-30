import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav
          className="navbar navbar-navs navbar-expend navbar-expand-md fixed-top"
          id="menu-top"
          style={{ background: "rgb(0,100,0)" }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src="assets/images/demos/demo-5/logo-a-removebg-preview.png"
                alt=""
                width={105}
                height={25}
                style={{ background: "white" }}
              />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="menu-nav main-menu active">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link page-scroll active"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="menu-nav main-menu dropdown">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link dropdown-toggle page-scroll"
                    to="/"
                    data-toggle="dropdown"
                  >
                    Product
                  </Link>

                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "rgb(0,100,0)" }}
                  >
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 1
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 2
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 3
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 4
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 5
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 6
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 7
                      </Link>
                    </li>
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/productlist"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Product 8
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-nav main-menu dropdown">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link dropdown-toggle page-scroll"
                    to="/"
                    data-toggle="dropdown"
                  >
                    Media
                  </Link>

                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "rgb(0,100,0)" }}
                  >
                    <li className="menu-nav">
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/blog"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-link dropdoen-item page-scroll"
                        to="/gallery"
                        style={{
                          color: "white",
                          fontSize: "1.7rem",
                          textAlign: "center",
                        }}
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-nav main-menu">
                  <Link
                    style={{
                      color: "white",
                      fontSize: "1.7rem",
                      marginLeft: "2rem",
                    }}
                    className="nav-link page-scroll"
                    to="/contactus"
                  >
                    Contact
                  </Link>
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
