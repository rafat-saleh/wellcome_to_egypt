/** @format */

import React from "react";

export default function About() {
  return (
    <div>
      <section
        className="about d-flex align-items-center text-light py-5"
        id="about"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <p>ABOUT</p>
              <h1>Wellcome to Egypt</h1>
              <p className="py-2 para-light">
                You can visit Egypt any time of the year upper egypt in short
                winter
                <br /> and whole egypt any time of the year
              </p>
              <p className="py-2 para-light">
                There are Everything in Egypt
                <br /> Pyrmids Temples Coast Museums ....
              </p>
            </div>
            <div
              className="col-lg-5 text-center py-2 py-sm-0"
              data-aos="fade-down"
            >
              <img
                className="img-fluid rounded-3 w-100 mt-5 "
                src={"./images/eg.jpg"}
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
