/** @format */

import React from "react";
import CountUp from "react-countup";

export default function Work() {
  return (
    <div>
      <section className="work d-flex align-items-center py-5" id="work">
        <div className="container-fluid text-light">
          <div className="row">
            <div
              className="col-lg-6 d-flex align-items-center mt-lg-5"
              data-aos="fade-right"
            >
              <img
                className="img-fluid mx-auto mt-lg-5"
                src={"./images/wo1.jpg"}
                alt=""
              />
            </div>
            <div
              className="col-lg-5 d-flex align-items-center px-4 py-3"
              data-aos=""
            >
              <div className="row">
                <div className="text-center text-lg-start py-4 pt-lg-0">
                  <h1>Our work</h1>
                  <h6 className="py-2">Work 12 Month</h6>
                  <p className="para-light">
                    Our Team Working 12 Month to Achieve Your Desires
                  </p>
                </div>
                <div className="container" data-aos="fade-up">
                  <div className="row g-5 text-center">
                    <div className="col-6 ">
                      <i className="fas fa-plane fa-3x"></i>
                      <h2 className="mt-2">
                        <CountUp delay={9} end={58} start={1} duration={3} />
                      </h2>
                      <p>Flight</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-award fa-3x"></i>
                      <h2 className="mt-2">
                        <CountUp delay={9} end={13} start={1} duration={3} />
                      </h2>
                      <p>Awords</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-users fa-3x"></i>
                      <h2 className="mt-2">
                        <CountUp delay={9} end={4355} start={1} duration={3} />
                      </h2>
                      <p>Customer Active</p>
                    </div>
                    <div className="col-6">
                      <i className="fas fa-star fa-3x"></i>
                      <h2 className="mt-2">
                        <CountUp delay={9} end={218} start={1} duration={3} />
                      </h2>
                      <p>Good Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
