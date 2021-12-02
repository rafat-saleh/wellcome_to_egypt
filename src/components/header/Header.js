/** @format */

import React, { useRef } from "react";

export default function Header() {
  const ref = useRef();
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
      document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (document.documentElement.scrollTop < 30) {
      document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
  };

  const ClickHandler = () => {
    ref.current.classList.toggle("open");
  };
  return (
    <div>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        aria-label="Main navigation"
      >
        <div className="container">
          <a className="navbar-brand logo-image" href="#">
            <img src={"./logo.jpg"} alt="alternative" />
          </a>

          <a className="navbar-brand logo-text mx-lg-5" href="#">
            Wellcome to Egypt
          </a>

          <button
            onClick={ClickHandler}
            className="navbar-toggler p-0 border-0"
            type="button"
            id="navbarSideCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse mt-4 mt-lg-0"
            ref={ref}
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#header"
                  onClick={ClickHandler}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={ClickHandler}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={ClickHandler}>
                  Places
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#plans" onClick={ClickHandler}>
                  Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work" onClick={ClickHandler}>
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={ClickHandler}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
