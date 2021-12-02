/** @format */

import React from "react";
import "./index.scss";

export default function Image(props) {
  return (
    <img
      src={props.imge}
      alt=""
      className="slideshow kenburnsBottom img-fluid rounded-3 mt-2"
      style={{ height: 180 }}
    />
  );
}
