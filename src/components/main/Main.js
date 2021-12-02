/** @format */

import React from "react";

export default function Mainf() {
  return (
    <div>
      <section className="home py-5 d-flex align-items-center" id="header">
        <div className="container text-light py-5" data-aos="fade-right">
          <h1 className="headline pt-5">
            Best <span className="home_text"></span>
            <br />
            Plans For You
          </h1>
          <p className="para para-light py-3">
            Spend your time in the best place in the world
          </p>

          <div className="mt-5">
            <a className="btn" href="#plans">
              View Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
