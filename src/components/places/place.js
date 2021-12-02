/** @format */

import React from "react";
import Image from "../UI/ImageUI/image";

export default function Place(props) {
  return (
    <div className="col-lg-4">
      <div className="card bg-transparent">
        <h4 className="py-2 mx-auto">{props.title}</h4>
        <p className="para-light text-center">{props.text}</p>
        <div className=" mb-3 mt-5 mx-auto ">
          <Image imge={props.img} />
        </div>
      </div>
    </div>
  );
}
