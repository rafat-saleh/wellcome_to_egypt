/** @format */

import React from "react";

export default function Details() {
  return (
    <div>
      <section className="newsletter text-light py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
            >
              <h4 className="py-1">More details</h4>
              <p className="para-light">
                If you need to know more information and details <br />
                Enter your email and send it for us
              </p>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="fade-down"
            >
              <div className="input-group my-3">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter your email address"
                  aria-label="Recipient's email"
                />
                <button className="btn-secondary text-light" type="button">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
