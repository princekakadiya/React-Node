import React from "react";
import MobileMenu from "../components/MobileMenu";

const SendInquiry = () => {
  return (
    <>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("assets/images/page-header-bg.jpg")',
        }}
      ></div>
      <div className="page-wrapper">
        <main className="main">
          <div className="page-content">
            <div className="touch-container row justify-content-center">
              <div className="col-md-9 col-lg-7">
                <div className="text-center">
                  <h2 className="title mb-1">Get In Touch</h2>
                  {/* End .title mb-2 */}
                  <p className="lead text-primary">
                    We collaborate with ambitious brands and people; we’d love
                    to build something great together.
                  </p>
                  {/* End .lead text-primary */}
                  <p className="mb-3">
                    Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                    euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                    pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                </div>
                {/* End .text-center */}
                <form action="#" className="contact-form mb-2">
                  <div className="row">
                    <div className="col-sm-4">
                      <label htmlFor="cname" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        placeholder="Name *"
                        required=""
                      />
                    </div>
                    {/* End .col-sm-4 */}
                    <div className="col-sm-4">
                      <label htmlFor="cemail" className="sr-only">
                        Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="cemail"
                        placeholder="Email *"
                        required=""
                      />
                    </div>
                    {/* End .col-sm-4 */}
                    <div className="col-sm-4">
                      <label htmlFor="cphone" className="sr-only">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="cphone"
                        placeholder="Phone"
                      />
                    </div>
                    {/* End .col-sm-4 */}
                  </div>
                  {/* End .row */}
                  <label htmlFor="csubject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="csubject"
                    placeholder="Subject"
                  />
                  <label htmlFor="cmessage" className="sr-only">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={4}
                    id="cmessage"
                    required=""
                    placeholder="Message *"
                    defaultValue={""}
                  />
                  <div className="text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-outline-success"
                    >
                      Submit
                      <i className="icon-long-arrow-right" />
                    </button>
                  </div>
                  {/* End .text-center */}
                </form>
                {/* End .contact-form */}
              </div>
              {/* End .col-md-9 col-lg-7 */}
            </div>
          </div>
        </main>
      </div>
      <MobileMenu />
    </>
  );
};

export default SendInquiry;
