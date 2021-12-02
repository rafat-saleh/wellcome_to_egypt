/** @format */

import React from "react";

export default function Footer() {
  return (
    <div>
      <section className="footer text-light">
        <div className="container">
          <div className="row" data-aos="fade-right">
            <div className="col-lg-3 py-4 py-md-5">
              <div className="d-flex align-items-center">
                <h4 className="">Wellcome to Egypt</h4>
              </div>
              <p className="py-3 para-light">Socail media</p>
              <div className="d-flex">
                <div className="me-3">
                  <a href="#your-link">
                    <i className="fab fa-facebook-f fa-2x py-2"></i>
                  </a>
                </div>
                <div className="me-3">
                  <a href="#your-link">
                    <i className="fab fa-twitter fa-2x py-2"></i>
                  </a>
                </div>
                <div className="me-3">
                  <a href="#your-link">
                    <i className="fab fa-instagram fa-2x py-2"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div>
                <h4 className="py-2">Quick Links</h4>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#about">
                    <p className="ms-3">About</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#services">
                    <p className="ms-3">Services</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#plans">
                    <p className="ms-3">Plans</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#work">
                    <p className="ms-3">Work</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#contact">
                    <p className="ms-3">Contact</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div>
                <h4 className="py-2">Useful Links</h4>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#">
                    <p className="ms-3">Privacy</p>
                  </a>
                </div>
                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#">
                    <p className="ms-3">Terms</p>
                  </a>
                </div>

                <div className="d-flex align-items-center py-2">
                  <i className="fas fa-caret-right"></i>
                  <a href="#">
                    <p className="ms-3">FAQ</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 py-4 py-md-5">
              <div className="d-flex align-items-center">
                <h4>Contact us</h4>
              </div>
              <p className="py-3 para-light">Send your Email for us</p>
              <div className="d-flex align-items-center">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Enter Email"
                    aria-label="Recipient's email"
                  />
                  <button className="btn-secondary text-light">
                    <i className="fas fa-envelope fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
