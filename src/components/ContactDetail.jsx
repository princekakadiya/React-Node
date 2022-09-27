import React from "react";

const ContactDetail = () => {
  return (
    <>
      <div className="page-content pb-0 pt-5"
      style={{ backgroundImage: "url(assets/images/background.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto"
}}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2 mb-lg-0">
              <h2 className="title mb-1">Contact Information</h2>
              <p className="mb-3">
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
              </p>
              <div className="row">
                <div className="col-sm-7">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <li>
                        <i className="icon-map-marker" />
                        70 Washington Square South New York, NY 10012, United
                        States
                      </li>
                      <li>
                        <i className="icon-phone" />
                        <a href="tel:#">+92 423 567</a>
                      </li>
                      <li>
                        <i className="icon-envelope" />
                        <a href="mailto:#">info@Arrayah.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="contact-info">
                    <h3>The Office</h3>
                    <ul className="contact-list">
                      <li>
                        <i className="icon-clock-o" />
                        <span className="text-dark">Monday-Saturday</span>{" "}
                        <br />
                        11am-7pm ET
                      </li>
                      <li>
                        <i className="icon-calendar" />
                        <span className="text-dark">Sunday</span> <br />
                        11am-6pm ET
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="title mb-1">Got Any Questions?</h2>
              <p className="mb-2">
                Use the form below to get in touch with the sales team
              </p>
              <form
                action="#"
                // onSubmit={handleSubmit(onSubmit)}
                className="contact-form mb-3"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cname" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      // {...register("name")}
                      className="form-control"
                      id="cname"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cemail" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      // {...register("email")}
                      className="form-control"
                      id="cemail"
                      placeholder="Email *"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="cphone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      // {...register("phone")}
                      className="form-control"
                      id="cphone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="csubject" className="sr-only">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      // {...register("subject")}
                      className="form-control"
                      id="csubject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <label htmlFor="cmessage" className="sr-only">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  // {...register("message")}
                  cols={30}
                  rows={4}
                  id="cmessage"
                  required
                  placeholder="Message *"
                  defaultValue={""}
                />

                <button type="submit" class="btn btn-lg btn-outline-success">
                  Submit
                  <i className="icon-long-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="map" className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.940772264116!2d72.5011472149193!3d23.025946784951348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3bfd772303%3A0xbfb4ae854688a1ac!2sSANKALP%20ICONIC%20TOWER%2C%20Sankalp%20Iconic%20Tower%2C%20Sanidhya%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1648551631432!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
