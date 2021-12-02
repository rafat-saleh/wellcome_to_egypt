/** @format */

import React from "react";

export default function Location() {
  return (
    <div>
      <section className="location text-light py-5">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-map fa-3x"></i>
              </div>
              <div className="ms-2">
                <p>Cairo</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2 mx-2">
                <i className="fas fa-mobile-alt fa-3x"></i>
              </div>
              <div className="ms-2">
                <p> 0001 000 0001</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-envelope fa-3x"></i>
              </div>
              <div className="ms-2">
                <p>rrrr@example.com</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="p-2">
                <i className="far fa-clock fa-3x"></i>
              </div>
              <div className="ms-2">
                <p>09:00 AM - 18:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
