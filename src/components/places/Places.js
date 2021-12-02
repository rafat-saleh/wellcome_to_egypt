/** @format */

import React from "react";
import data from "../../data.json";
import Place from "./place";
export default function Places() {
  return (
    <div>
      <section
        className="services d-flex align-items-center py-5"
        id="services"
      >
        <div className="container text-light">
          <div className="text-center pb-4">
            <h1>Places</h1>
            <h5 className="py-2">Explore unlimited places</h5>
            <p className="para-light">
              Alot of places in Egypt is very beautifull like
            </p>
          </div>
          <div className="row gy-4 py-2" data-aos="zoom-in">
            {data.places.map((p) => (
              <Place
                key={Math.random().toString()}
                title={p.title}
                text={p.text}
                img={p.img}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
