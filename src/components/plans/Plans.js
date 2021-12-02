/** @format */

import React from "react";

export default function Plans() {
  return (
    <div>
      <section className="plans d-flex align-items-center py-5" id="plans">
        <div className="container text-light">
          <div className="text-center pb-4">
            <h1>PLANS</h1>
            <h5 className="py-2">Explore the best plans</h5>
            <p className="para-light">The best plan with best cost</p>
          </div>
          <div className="row gy-4" data-aos="zoom-in">
            <div className="col-lg-4">
              <div className="card bg-transparent px-4 ">
                <h4 className="py-2">BASIC</h4>
                <p className="py-3">7 Days Hotel 3 Stars</p>
                <div className="yy">
                  <div className="block d-flex align-items-center">
                    <p className="pe-2">
                      <i className="far fa-check-circle fa-1x"></i>
                    </p>
                    <p>Pyrmids and Sphinx</p>
                  </div>
                  <div className="block d-flex align-items-center">
                    <p className="pe-2">
                      <i className="far fa-check-circle fa-1x"></i>
                    </p>
                    <p>Cairo Tour</p>
                  </div>
                  <div className="block d-flex align-items-center">
                    <p className="pe-2">
                      <i className="far fa-check-circle fa-1x"></i>
                    </p>
                    <p>Hotel 3 Stars</p>
                  </div>
                  <div className="block d-flex align-items-center">
                    <p className="pe-2">
                      <i className="far fa-check-circle fa-1x"></i>
                    </p>
                    <p>3 Day in Sharm El Shiekh</p>
                  </div>
                </div>
                <h4 className="py-3">$6000</h4>
                <div className="my-3">
                  <a className="btn" href="#your-link">
                    View Plan
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card bg-transparent px-4">
                <h4 className="py-2">Business</h4>
                <p className="py-3">14 Day Hotel 5 Stars</p>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>Pyrmids and Sphinx</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>Cairo Tour</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p> Luxor 3 Day</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>8 Day in Sharm El Shiekh</p>
                </div>
                <h4 className="py-3">$9000</h4>
                <div className="my-3">
                  <a className="btn" href="#your-link">
                    View Plan
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card bg-transparent px-4">
                <h4 className="py-2">Premium</h4>
                <p className="py-3">21 Day Hotel 7 Stars</p>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>Pyrmids and Sphinx</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>Cairo Tour</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>Luxor 5 Day</p>
                </div>
                <div className="block d-flex align-items-center">
                  <p className="pe-2">
                    <i className="far fa-check-circle fa-1x"></i>
                  </p>
                  <p>12 Day in Sharm El Shiekh</p>
                </div>
                <h4 className="py-3">$13000</h4>
                <div className="my-3">
                  <a className="btn" href="#your-link">
                    View Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
