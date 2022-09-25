import React from "react";

const Error = () => {
  return (
    <>
      <>
        <main className="main">
          <div
            className="error-content text-center"
            style={{
              backgroundImage: "url(assets/images/backgrounds/error-bg.jpg)",
            }}
          >
            <div className="container">
              <h1 className="error-title">Error 404</h1>
              {/* End .error-title */}
              <p>We are sorry, the page you've requested is not available.</p>
              <a href="/" className="btn btn-outline-primary-2 btn-minwidth-lg">
                <span>BACK TO HOMEPAGE</span>
                <i className="icon-long-arrow-right" />
              </a>
            </div>
            {/* End .container */}
          </div>
          {/* End .error-content text-center */}
        </main>
        {/* End .main */}
      </>
    </>
  );
};

export default Error;
