/** @format */

import React from "react";

export default function Information() {
  return (
    <div>
      <section className="information">
        <div className="container-fluid">
          <div className="row text-light">
            <div className="col-lg-4 text-center p-5" data-aos="zoom-in">
              <i className="fas fa-ankh fa-5x p-2"></i>
              <h4 className="py-3">More than 1/3</h4>
              <p className="para-light">
                Heritage the world is in only one city
              </p>
            </div>
            <div className="col-lg-4 text-center p-5" data-aos="zoom-in">
              <i className="fas fa-umbrella-beach fa-4x p-2"></i>
              <h4 className="py-3">More than 2000 km coast</h4>
              <p className="para-light text-white">Two sea and one river</p>
            </div>
            <div
              className="col-lg-4 text-center p-5 text-dark"
              data-aos="zoom-in"
            >
              <i className="fas fa-plane fa-4x p-2"></i>
              <h4 className="py-3">More 13 million </h4>
              <p className="para-light text-dark">Tourists who visited Egypt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
